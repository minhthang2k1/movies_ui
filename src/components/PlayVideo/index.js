import Modal from "react-modal";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import Null from "../../assets/null.jpg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PlayVideo = ({ openModal, setOpenModal, id }) => {
  const dispatch = useDispatch();
  const { IdMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getIdMovies());
  }, [id]);

  return (
    <>
      {IdMovies && (
        <Modal
          ariaHideApp={false}
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <iframe
            width={727}
            height={500}
            src={
              IdMovies[0] === undefined
                ? Null
                : `https://www.youtube.com/embed/${IdMovies[0].key}`
            }
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          ;
        </Modal>
      )}
    </>
  );
};
export default PlayVideo;
