class PdfReport {
  generate() {
    return "Relatório em PDF gerado!";
  }
}

class PdfInvoice {
  generate() {
    return "Fatura em PDF gerada!";
  }
}

class DocxReport {
  generate() {
    return "Relatório em DOCX gerado!";
  }
}

class DocxInvoice {
  generate() {
    return "Fatura em DOCX gerada!";
  }
}

class FileExtensionFactory {
    createPDFFile(){
        throw new Error("Método abstrato deve ser implementado");
    }
    createDOCXFile() {
    throw new Error("Método abstrato deve ser implementado");
  }
}


class ReportFactory extends FileExtensionFactory {
    createPDFFile() {
        return new PdfReport
    }
    createDOCXFile() {
        return new DocxReport
    }
}

class InvoiceFactory extends FileExtensionFactory {
    createPDFFile() {
        return new PdfInvoice
    }
    createDOCXFile() {
        return new DocxInvoice
    }
}

class DocumentApp {
    constructor(factory) {
        this.factory = factory;
    }


    generateFiles() {
        const pdf = this.factory.createPDFFile();
        const docx = this.factory.createDOCXFile();

        console.log(pdf.generate());
        console.log(docx.generate());
    }
}


function main() {
    const factories = {
        report: new ReportFactory,
        invoice: new InvoiceFactory
    };


    const types = ["report", "invoice"];

    types.forEach((type) => {
        console.log(`\n>> Fábrica selecionada: ${type} <<`);
        const factory = factories[type];
        if (!factory) throw new Error("Tipo de fábrica desconhecido");


        const app = new DocumentApp(factory);
        app.generateFiles();

    })
}

main()