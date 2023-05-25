import AddWord from "./components/add-word/AddWord";
import SearchWords from "./components/search-words/SearchWords";
import SelectLanguage from "./components/select-language/SelectLanguage";
import Table from "./components/table/Table";


const Home = () => {
    return (
        <main className="main">

            <SearchWords />

            <SelectLanguage />

            <AddWord />

            <Table />
        </main>
    )
}

export default Home