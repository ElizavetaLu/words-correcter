import { useEffect, useState } from "react";

import TableRowDefault from "./TableRowDefault";
import "./Table.scss";

const words = [
    {
        sourceWord: "Pipka",
        sourceLang: "en",
        targetWord: "Піпка",
        targetLang: "be",
        speechPart: "noun",
        transcriptions: ["/piːpkɑː/"],
        synonyms: null,
        antonyms: null,
        definitions: ["cat's nose"],
    },
    {
        sourceWord: "Unobtrusively",
        sourceLang: "en",
        targetWord: "Непрыкметна",
        targetLang: "be",
        speechPart: "adverb",
        transcriptions: ["/ˌʌnəbˈtruːsɪvli/"],
        synonyms: ["inconspicuous", "low-key", "restrained", "self-effacing", "subdued", "unassuming"],
        antonyms: ["boastfully", "boldly", "immodestly", "pretentiously"],
        definitions: ["In a way that does not attract unnecessary attention", "In an unobtrusive manner"],
    }
]


const Table = () => {

    const [page, setPage] = useState<number>(1);


    const handleScroll = (e: any) => {
        // if (isLoading) return;

        const { scrollHeight, scrollTop, clientHeight } = e.target.documentElement;

        if (scrollHeight - scrollTop === clientHeight) {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    // if (totalPages === 1 && !words.length) {
    //     return <p className="empty-list"> No data was found </p>;
    // };

    // if (isLoading && !words.length) {
    //     return <div className="loading"> <Loading /> </div>;
    // };

    return (
        <div className="table">

            {
                words.map((item: any, i: number) => {
                    console.log(item)
                    return <TableRowDefault
                        key={i}
                        id={item._id}
                        sourceWord={item.sourceWord}
                        targetWord={item.targetWord}
                    />
                })
            }

        </div>
    )
}

export default Table