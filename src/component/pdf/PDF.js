import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import ReactDOM from "react-dom";
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const TutelaPDF = () => (
  <PDFViewer style={styles.iframe}>
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>
          DOCUMENTO DE ACCIÓN DE TUTELA PERSONALIZADO
        </Text>
      </Page>
    </Document>
  </PDFViewer>
);

const styles = StyleSheet.create({
  iframe: {
    height: "100%",
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "left",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
});

ReactDOM.render(<TutelaPDF />, document.getElementById("root"));

export default TutelaPDF;
