import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWords } from "../../../../store/actions/actionCreators";
import { IWordsData } from "../../../../interfaces";
import useToggle from "../../../../hooks/useToggle";

import WordDataContainer from "../../../../components/modal/word-data-fields/WordDataContainer";
import RemoveWord from "../../../../components/modal/remove-word/RemoveWord";
import Loading from "../../../../components/loading/Loading";
import TableRowDefault from "./default-row/TableRowDefault";
import Modal from "../../../../components/modal/Modal";
import "./Table.scss";


const Table = () => {

    const dispatch: Dispatch<any> = useDispatch();

    const { isLoading, totalPages, searchTerm, sourceLang, targetLang, words } = useSelector((state: any) => state.words);

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
            sourceLang: sourceLang,
            targetLang: targetLang,
            searchTerm
        }))

    }, [page])


    const [isShownDeleteModal, toggleDeleteModal] = useToggle();
    const [isShownUpdateModal, toggleUpdateModal] = useToggle();



    if (totalPages === 1 && !words.length) {
        return <p className="empty-list"> No data was found </p>;
    };

    if (isLoading && !words.length) {
        return <div className="loading"> <Loading /> </div>;
    };

    return (
        <div className="table">
            {
                words?.map((item: IWordsData) => <TableRowDefault
                    key={item._id}
                    {...item} 
                    toggleDeleteModal={toggleDeleteModal} 
                    toggleUpdateModal={toggleUpdateModal}
                />)
            }


            <Modal isShown={isShownDeleteModal} toggle={toggleDeleteModal}>
                <RemoveWord toggle={toggleDeleteModal} />
            </Modal>

            <Modal isShown={isShownUpdateModal} toggle={toggleUpdateModal}>
                <WordDataContainer toggleModal={toggleUpdateModal} />
            </Modal>

        </div>
    )
}

export default Table