import { useState } from 'react';
import { generalChangeNote } from '../../../Changes';
import { EntityAttributes } from '../entity';
import { UseGafpriAttributesOrderReturnItemsReturn } from '../productsItems';

type State = {
  orderPostsId: number;
  note: string;
  entity: EntityAttributes | null;
};

type Actions = {
  infoReset: () => void;
  setOrderPostsId: (value: number) => void;
  changeNote: (value: string) => void;
  setEntity: (value: EntityAttributes | null) => void;
};

export type UseGafpriAttributesOrderReturnReturn = {
  states: State;
  actions: Actions;
};

export type UseGafpriAttributesOrderReturnProps = {
  useProductItems: UseGafpriAttributesOrderReturnItemsReturn;
};

export function useGafpriAttributesOrderReturn({
  useProductItems,
}: UseGafpriAttributesOrderReturnProps): UseGafpriAttributesOrderReturnReturn {
  const [orderPostsId, setOrderPostsId] = useState(0);
  const [note, setNote] = useState('');

  const [entity, setEntity] = useState<EntityAttributes | null>(null);

  const infoReset = (): void => {
    setOrderPostsId(0);
    setNote('');
    setEntity(null);
    useProductItems.actions.infoReset();
  };

  const changeNote = (value: string): void => {
    generalChangeNote({
      value,
      setValue: setNote,
    });
  };

  /**
   * Export
   *
   *
   */
  const states = {
    orderPostsId,
    note,
    entity,
  };

  const actions = {
    infoReset,
    setOrderPostsId,
    changeNote,
    setEntity,
  };

  return {
    states,
    actions,
  };
}
