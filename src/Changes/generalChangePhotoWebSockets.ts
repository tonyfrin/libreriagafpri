import { ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getMimeTypeByExtension } from '../helpers';

export type GeneralChangePhotoWebSocketsProps = {
  e: ChangeEvent<HTMLInputElement>;
  setSubmitting: (valueSubmitting: boolean) => void;
  from: string;
  setPhoto: (valuePhoto: string) => void;
  changeError: (valueError: string[]) => void;
  validation?: (value: string) => boolean;
};

function resizeImage(
  file: File,
  maxWidth: number,
  maxHeight: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    const reader = new FileReader();

    reader.onload = (event): void => {
      if (event.target && typeof event.target.result === 'string') {
        img.src = event.target.result;
      }
    };

    reader.onerror = reject;

    img.onload = (): void => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7); // Ajusta la calidad de la imagen (0.7 en este caso)
        resolve(dataUrl);
      } else {
        reject(new Error('Failed to get canvas context'));
      }
    };

    reader.readAsDataURL(file);
  });
}

export const generalChangePhotoWebSockets = async ({
  e,
  setSubmitting,
  changeError,
  setPhoto,
  from,
  validation,
}: GeneralChangePhotoWebSocketsProps): Promise<void> => {
  const ws = new WebSocket(
    'wss://uploadimagemicroservise-599d9ed3d216.herokuapp.com'
  );
  const clientId = uuidv4();
  const TIMEOUT_DURATION = 10000; // 10 segundos

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleTimeout = (): void => {
    changeError([
      'La solicitud ha tardado demasiado. Por favor, intenta de nuevo.',
    ]);
    setSubmitting(false);
    ws.close();
  };

  ws.onopen = (): null => {
    return null;
  };

  ws.onmessage = (event): void => {
    clearTimeout(timeoutId);
    const receivedData = JSON.parse(event.data);

    if (
      receivedData.model === 'image' &&
      receivedData.action === 'create' &&
      receivedData.from === from
    ) {
      if (receivedData.success) {
        const valid = validation
          ? validation(receivedData.cleanImageUrl)
          : true;
        if (valid) {
          setPhoto(receivedData.cleanImageUrl);
          setSubmitting(false);
        }
      } else {
        changeError([receivedData.data]);
        setSubmitting(false);
      }
    }
  };

  ws.onerror = (error): void => {
    clearTimeout(timeoutId); // Limpiar el timeout si hay un error
    changeError([
      'Ocurrió un error con la conexión. Por favor, intenta de nuevo.',
      `${error}`,
    ]);
    setSubmitting(false);
  };

  ws.onclose = (): void => {
    clearTimeout(timeoutId);
  };

  const newFile = e.target.files && e.target.files[0];

  if (!newFile) return;

  const mimeType = getMimeTypeByExtension(newFile.name);
  if (!mimeType) {
    changeError([
      'El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.',
    ]);
    return;
  }

  setSubmitting(true);

  try {
    if (clientId !== '') {
      const resizedImageDataUrl = await resizeImage(newFile, 800, 800); // Ajusta las dimensiones según sea necesario

      // Aquí ya tenemos el data URL de la imagen redimensionada, lo enviamos directamente
      const data = {
        clientId,
        fileArrayBuffer: resizedImageDataUrl.split(',')[1], // Extraemos solo la parte base64
        from,
      };

      ws.onopen = (): void => {
        ws.send(JSON.stringify(data));
        timeoutId = setTimeout(handleTimeout, TIMEOUT_DURATION); // Configurar el timeout después de enviar el mensaje
      };
    }
  } catch (newErrorValue: unknown) {
    changeError(['Error cargando la imagen']);
    setSubmitting(false);
  }
};
