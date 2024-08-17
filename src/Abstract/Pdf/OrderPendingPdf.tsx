import React from 'react';
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import { formatDate, decimalFormatPriceConverter } from '../../helpers';
import { OrderAttributes } from '../states';
import { Countries, StatesCountries } from '../../constants';
import { SiteOptions } from '../../states';
import { truncarTexto } from '../../helpers';

export interface OrderPendingPdfProps {
  order: OrderAttributes; // Define la interfaz Order según tu modelo de datos
  logo: string; // Ruta de la imagen del logo de la empresa
  siteOptions: SiteOptions;
}

export const OrderPendingPdf: React.FC<OrderPendingPdfProps> = ({
  order,
  logo,
  siteOptions,
}) => {
  const state =
    (order.orderCustomer[0].address[0]?.country &&
      order.orderCustomer[0].address[0]?.state &&
      StatesCountries[0][order.orderCustomer[0].address[0].country]?.[0]?.[
        order.orderCustomer[0].address[0].state
      ]) ||
    '';

  const country =
    (order.orderCustomer[0].address[0]?.country &&
      Countries[0][order.orderCustomer[0].address[0].country]) ||
    '';

  const stateSite =
    (siteOptions.country &&
      siteOptions.state &&
      StatesCountries[0][siteOptions.country]?.[0]?.[siteOptions.state]) ||
    '';

  const countrySite =
    (siteOptions.country && Countries[0][siteOptions.country]) || '';

  const dig = siteOptions.DECIMAL_NUMBERS;
  const currencySymbol = siteOptions.CURRENCY_SYMBOL;
  const currencyLocation = siteOptions.CURRENCY_LOCATION;
  const CURRENCY_FORMAT = siteOptions.CURRENCY_FORMAT;

  const customer = order.orderCustomer[0] || {};
  const documentIndex = customer.documentIndex
    ? `${customer.documentIndex}-`
    : '';
  const address = (customer.address && customer.address[0]) || {};

  return (
    <Document>
      <Page style={styles.document} size="A4">
        <View style={styles.header}>
          <View style={styles.containerLogo}>
            {/* Logo de la empresa */}
            <Image src={logo} style={styles.logo} />
          </View>
          {/* Datos de la empresa */}
          <View style={styles.containerCompanyInfo}>
            <View style={styles.companyInfo}>
              <Text>{siteOptions.name}</Text>
              <Text>{siteOptions.address1}</Text>
              <Text>
                {siteOptions.city}, {stateSite}, {countrySite}
              </Text>
              <Text>{siteOptions.phone}</Text>
              <Text>{siteOptions.email}</Text>
              <Text>{siteOptions.host}</Text>
            </View>
          </View>
        </View>
        <View style={styles.TitleContainer}>
          <Text>PEDIDO {order.postsId}</Text>
        </View>
        {/* Datos del cliente, fecha, número de orden y método de pago */}
        <View style={styles.customerInfo}>
          <View style={styles.customerData}>
            <Text style={styles.line}>
              <Text style={styles.bold}>
                {customer.name} {customer.lastName && customer.lastName}
              </Text>
            </Text>
            <Text style={styles.line}>
              <Text>{`${customer.documentType}: ${documentIndex}${customer.documentDigit}`}</Text>
            </Text>
            <Text style={styles.line}>
              <Text>{address.address1 || ''}</Text>
            </Text>
            {address.address2 && (
              <Text style={styles.line}>
                <Text>{address.address2}</Text>
              </Text>
            )}
            <Text style={styles.line}>
              <Text>{`${address.city || ''}, ${state || ''}, ${
                country || ''
              }`}</Text>
            </Text>
            {customer.phone && (
              <Text style={styles.line}>
                <Text>{customer.phone}</Text>
              </Text>
            )}
            {customer.email && (
              <Text style={styles.line}>
                <Text>{customer.email}</Text>
              </Text>
            )}
          </View>
          <View style={styles.orderData}>
            <Text style={styles.line}>
              <Text>
                <Text style={styles.bold}>Fecha:</Text>{' '}
                {formatDate(`${order.posts.createdAt}`)}
              </Text>
            </Text>
            <Text style={styles.line}>
              <Text>
                <Text style={styles.bold}>Pedido:</Text> {order.postsId}
              </Text>
            </Text>
            <Text style={styles.line}>
              <Text>
                <Text style={styles.bold}>Pago:</Text> {`Pendiente por pago`}
              </Text>
            </Text>
          </View>
        </View>

        {/* Detalles de los ítems de la orden */}
        <View style={styles.itemTable}>
          {/* Encabezado de la tabla */}
          <View style={styles.tableHeader}>
            <Text style={styles.col1}>
              <Text style={styles.bold}>SKU</Text>
            </Text>
            <Text style={styles.col8}>
              <Text style={styles.bold}>Nombre del Producto</Text>
            </Text>
            <Text style={styles.col1}>
              <Text style={styles.bold}>Qty</Text>
            </Text>
            <Text style={styles.col2}>
              <Text style={styles.bold}>Precio</Text>
            </Text>
            <Text style={styles.col2}>
              <Text style={styles.bold}>Total</Text>
            </Text>
          </View>

          {/* Datos de los ítems (máximo 20) */}
          <View style={styles.containerTableRow}>
            {order.orderItems.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={styles.col1}>{item.sku}</Text>
                <Text style={styles.col8}>
                  <Text style={styles.tableCol}>
                    {truncarTexto(item.name, 65)}
                  </Text>
                </Text>
                <Text style={styles.col1}>
                  {parseFloat(`${item.qty}`).toFixed(2)}
                </Text>
                <Text style={styles.col2}>
                  {decimalFormatPriceConverter(
                    item.price,
                    dig,
                    currencySymbol,
                    currencyLocation,
                    CURRENCY_FORMAT
                  )}
                </Text>
                <Text style={styles.col2}>
                  {decimalFormatPriceConverter(
                    item.total || 0,
                    dig,
                    currencySymbol,
                    currencyLocation,
                    CURRENCY_FORMAT
                  )}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Totales */}
        <View style={styles.finalSection}>
          <View style={styles.noteSection}>
            <Text style={styles.line}>
              <Text>
                <Text style={styles.bold}>Nota:</Text> {order.note}
              </Text>
            </Text>
          </View>
          <View style={styles.totalSection}>
            <Text style={styles.line}>
              <Text>
                <Text style={styles.bold}>Subtotal:</Text>{' '}
                <Text>
                  {decimalFormatPriceConverter(
                    order.subTotal,
                    dig,
                    currencySymbol,
                    currencyLocation,
                    CURRENCY_FORMAT
                  )}
                </Text>
              </Text>
            </Text>
            <Text style={styles.line}>
              <Text>
                <Text style={styles.bold}>Total Impuestos:</Text>{' '}
                {decimalFormatPriceConverter(
                  order.subTotalTax,
                  dig,
                  currencySymbol,
                  currencyLocation,
                  CURRENCY_FORMAT
                )}
              </Text>
            </Text>
            <Text style={styles.line}>
              <Text>
                <Text style={styles.bold}>Total Pedido:</Text>{' '}
                {decimalFormatPriceConverter(
                  order.total,
                  dig,
                  currencySymbol,
                  currencyLocation,
                  CURRENCY_FORMAT
                )}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          {siteOptions.footerOrderPending.map((item) => (
            <Text>{item}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  // Estilos para el componente, puedes ajustar según tus necesidades
  document: {
    fontFamily: 'Courier',
    fontSize: 8,
    fontStyle: 'normal',
    width: '100%',
    maxWidth: 650,
    margin: '0 auto',
    padding: 20,
    color: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  containerLogo: {
    textAlign: 'left',
    justifyContent: 'flex-start',
    width: '50%',
    margin: 'auto 0',
  },
  logo: {
    width: 120,
  },
  containerCompanyInfo: {
    // fontFamily: 'Arial',
    textAlign: 'left',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  companyInfo: {
    marginLeft: 100,
    fontFamily: 'Courier-Bold',
    fontSize: 10,
  },
  bold: {
    fontFamily: 'Courier-Bold',
    marginRight: 10,
    paddingRight: 10,
  },
  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    fontFamily: 'Courier-Bold',
    fontSize: 20,
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 10,
  },
  customerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 10,
  },
  customerData: {
    width: '50%',
  },
  orderData: {
    width: '50%',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  itemTable: {
    marginBottom: 5,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: 1,
    paddingBottom: 5,
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
  },
  containerTableRow: {
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 7,
    overflow: 'hidden',
  },
  tableCol: {
    textAlign: 'left',
    paddingLeft: 5,
  },
  totalSection: {
    width: '50%',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    textAlign: 'right',
    paddingRight: 17,
    fontSize: 12,
  },
  noteSection: {
    width: '50%',
  },
  line: {
    marginBottom: 7,
  },
  col1: {
    width: '8.3333333%',
  },
  col2: {
    width: '16.6666667%',
  },
  col3: {
    width: '25%',
  },
  col4: {
    width: '33.3333333%',
  },
  col5: {
    width: '41.6666667%',
  },
  col6: {
    width: '50%',
  },
  col7: {
    width: '58.3333333%',
  },
  col8: {
    width: '66.6666667%',
  },
  col9: {
    width: '75%',
  },
  col10: {
    width: '83.3333333%',
  },
  col11: {
    width: '91.6666667%',
  },
  col12: {
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    textAlign: 'center',
    fontSize: 10,
    color: '#333',
    borderTop: 1,
    borderColor: '#ababab',
    paddingTop: 10,
  },
  finalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    border: 1,
    borderColor: '#ababab',
    borderRadius: 5,
    padding: 10,
  },
});
