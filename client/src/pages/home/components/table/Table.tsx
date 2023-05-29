import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWords } from "../../../../store/actions/actionCreators";

import Loading from "../../../../components/loading/Loading";
import TableRowDefault from "./default-row/TableRowDefault";
import TableRowActive from "./active-row/TableRowActive";
import "./Table.scss";
import { IWordsData } from "../../../../interfaces";


const Table = () => {

    const dispatch: Dispatch<any> = useDispatch();

    const { isLoading, totalPages, searchTerm, sourceLang, targetLang, words, activeItemId } = useSelector((state: any) => state.words);

    const [page, setPage] = useState<number>(1);


    const handleScroll = (e: any) => {
        if (isLoading) return;

        const { scrollHeight, scrollTop, clientHeight } = e.target.documentElement;

        if (scrollHeight - scrollTop === clientHeight) {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    useEffect(() => {
        if (totalPages !== 0 && totalPages < page) return;

        dispatch(getWords(page === 1, {
            pageNumber: page,
            sourceLang: sourceLang.code,
            targetLang: targetLang.code,
            searchTerm
        }))

    }, [page])


    if (totalPages === 1 && !words.length) {
        return <p className="empty-list"> No data was found </p>;
    };

    if (isLoading && !words.length) {
        return <div className="loading"> <Loading /> </div>;
    };

    return (
        <div className="table">
            {
                words?.map((item: IWordsData) => {

                    if (activeItemId === item._id) return <TableRowActive key={item._id} />

                    return <TableRowDefault
                        key={item._id}
                        _id={item._id}
                        sourceWord={item.sourceWord}
                        targetWord={item.targetWord}
                    />
                })
            }

        </div>
    )
}

export default Table