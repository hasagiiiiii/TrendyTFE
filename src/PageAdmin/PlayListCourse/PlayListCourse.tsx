import React from 'react';
import Pic1 from '../../assets/pic-1.jpg';
import Thumb from '../../assets/post-1-1.png';

import './index.css';
import { Button } from 'antd';
import ModalCommon from '../../Common/Component/Modal/Modal.component';
import AddPlayList from '../AddPlayList/AddPlayList';
import getCookie from '../../Common/Function/Cookie';
import { fetchData } from '../../Hook/useFetch';
const PlayListCourse = () => {
  const idCourse = getCookie('idCourse');
  React.useEffect(() => {
    fetchData(`http://localhost:3001/course/getPlayListbyID`, 'POST', {
      idCourse,
    });
  }, []);
  const handleAddPlayList = () => {
    const addPlayList = ModalCommon.Show({
      title: <h1>Add Play List</h1>,
      content: (
        <AddPlayList
          onSucces={() => addPlayList.destroy()}
          idCourse={idCourse}
        />
      ),
      width: 600,
    });
  };
  return (
    <div>
      <h1 className="heading">playlist details</h1>
      <section className="playlist-details">
        <div className="row">
          <div className="column">
            {/* <form action="" method="post" className="save-playlist">
              <button type="submit">
                <i className="far fa-bookmark"></i> <span>save playlist</span>
              </button>
            </form> */}

            <div className="thumb">
              <img src={Thumb} alt="" />
              <span>10 videos</span>
            </div>
          </div>
          <div className="column">
            <div className="tutor">
              <img src={Pic1} alt="" />
              <div>
                <h3>john deo</h3>
                <span>21-10-2022</span>
              </div>
            </div>

            <div className="details">
              <h3>complete HTML tutorial</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                minus reiciendis, error sunt veritatis exercitationem deserunt
                velit doloribus itaque voluptate.
              </p>
              <Button
                style={{ padding: '20px 40px', width: '300px' }}
                className="btn"
                onClick={() => handleAddPlayList()}
              >
                Add to playlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayListCourse;
