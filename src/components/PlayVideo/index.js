import { Modal } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import Null from "../../assets/null.jpg";

const PlayVideo = ({ openModal, setOpenModal, id }) => {
  const dispatch = useDispatch();
  const { IdMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getIdMovies());
  }, [id]);
  console.log(IdMovies);

  return (
    <>
      {IdMovies && (
        <Modal
          width={1000}
          height={500}
          title={IdMovies[0] === undefined ? "Not Available" : IdMovies[0].name}
          centered
          open={openModal}
          onOk={() => setOpenModal(false)}
          onCancel={() => setOpenModal(false)}
        >
          <iframe
            width="950"
            height="315"
            src={
              IdMovies[0] === undefined
                ? Null
                : `https://www.youtube.com/embed/${IdMovies[0].key}`
            }
          ></iframe>
        </Modal>
      )}
    </>
  );
};
export default PlayVideo;
