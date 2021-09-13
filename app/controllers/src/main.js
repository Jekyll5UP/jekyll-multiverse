import Catalog from "./views/Catalog.svelte";
import Footer from "./views/Footer.svelte";
import Header from "./views/Header.svelte";

const PanelHeader = new Header({
  target: document.getElementById("HEADER_TARGET"),
});

const BooksCatalog = new Catalog({
  target: document.getElementById("CATALOG_TARGET"),
});
const PanelFooter = new Footer({
  target: document.getElementById("FOOTER_TARGET"),
});

export {
	PanelHeader,
	BooksCatalog,
	PanelFooter,
};
