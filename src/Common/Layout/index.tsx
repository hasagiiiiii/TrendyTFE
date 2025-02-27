import React, { useContext, useState } from 'react';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageFilled,
  PlusOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Collapse,
  Drawer,
  Flex,
  Layout,
  Menu,
  Row,
  Spin,
  theme,
  Typography,
} from 'antd';
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './index.css';
import { AppContextAPI } from '../../Context/AppContext';
import { BreadCumpItem } from '../../Model/root.model';
import getCookie from '../Function/Cookie';
import { GetAddRoomModel } from '../../Page/AddRoom/store/addRoom.model';
import { CallVideoContextAPI } from '../../Context/CallVideoContext';
import { useDispatch } from 'react-redux';
import roomStoreReducer from '../../Store/Room/room.store.reducer';
import { io, Socket } from 'socket.io-client';
import ModalCommon from '../Component/Modal/Modal.component';
import Register from '../../Page/Register/Register';
import Login from '../../Page/Login/Login';
import Home from '../../Page/Home/Home';
import HomeAdmin from '../../PageAdmin/HomeAdmin/HomeAdmin';
import pic1 from '../../assets/pic-1.jpg';
import { IoMdHome, IoMdSearch } from 'react-icons/io';
import { FaGraduationCap, FaQuestion, FaSun, FaUser } from 'react-icons/fa';
import { FaPersonChalkboard } from 'react-icons/fa6';
import { MdContactMail, MdMenu } from 'react-icons/md';
import NotFound from '../../Page/NotFound/NotFound';
import CoursesAdmin from '../../PageAdmin/CoursesAdmin/CoursesAdmin';
const { Header, Sider, Content } = Layout;
const LayoutCommon: React.FC = () => {
  const { login, setLogin, Logout, spin, setSpin } =
    React.useContext(AppContextAPI);
  const call = useContext(CallVideoContextAPI);
  const [listRoom, setListRoom] = React.useState<GetAddRoomModel[] | []>([]);
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [breadCump, setBreadCump] = useState<BreadCumpItem[]>([]);
  const [user, setUser] = useState<any>();
  const [active, setActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setUser(JSON.parse(getCookie('user')));
  }, []);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Nếu scroll > 50px thì thêm class
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    setBreadCump(() => {
      return location.pathname.split('/').map((item, index) => {
        if (index === 0) {
          return { title: <Link to="">Home</Link> };
        } else {
          return { title: item };
        }
      });
    });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [navigate]);
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id !== 'toggleButton') {
      setTimeout(() => setActive(false), 1000);
    }
  };
  // useEffect(() => {
  //   const newSocket = io('http://localhost:3001/', {
  //     // connect to socket Server
  //     transports: ['websocket'],
  //   });
  //   setSocket(newSocket);

  //   newSocket.on('connect', () => {
  //     console.log('Socket connected:', newSocket.id); // Xác nhận kết nối thành công
  //   });
  //   newSocket.on('pushUser', (data) => {
  //     if (data.idaccount == idAcount) {
  //       setListRoom((pre) => [...pre, data]);
  //     }
  //   });
  //   newSocket.on('disconnect', () => {
  //     console.log('Socket disconnected');
  //   });
  //   setSocket(newSocket);
  //   return () => {
  //     newSocket.disconnect();
  //   };
  // }, []);

  const handleRegister = () => {
    const RegisterModal = ModalCommon.Show({
      content: <Register onSucces={() => RegisterModal.destroy()} />,
      title: <h1>Register</h1>,
      width: 800,
    });
  };
  const hanldeLogin = () => {
    const LoginModal = ModalCommon.Show({
      content: (
        <Login
          setLogin={setLogin}
          setSpin={setSpin}
          onSucces={() => LoginModal.destroy()}
          setUser={setUser}
        />
      ),
      title: <h1>Login</h1>,
      width: 800,
      afterClose: () => {},
    });
  };
  const handleNavigate = (url: string, idRoom: number, nameRoom: string) => {
    if (url === '/VideoCall') {
      call?.handleJoinRoom(idRoom.toString());
    }
    if (url === '/Chat') {
      socket?.emit('joinRoomChat', { roomId: idRoom });
    }
    dispatch(roomStoreReducer.actions.addRoom(idRoom));
    navigate(`${url}/${nameRoom.trim()}`);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log('message', listRoom);

  return (
    <Layout onMouseDown={handleMouseDown} hasSider={true}>
      <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="profile">
          <img src={pic1} className="image" alt="" />
          <h3 className="name">TrunLiver</h3>
          <p className="role">{user?.role}</p>
          <Link to="profile.html" className="btn">
            view profile
          </Link>
        </div>

        <nav className="navbar">
          <Link to="home.html">
            <div className="flex">
              <IoMdHome size={25} />
              <span>Home</span>
            </div>
          </Link>
          <Link to="about.html">
            <div className="flex">
              <FaQuestion size={25} />
              <span>About</span>
            </div>
          </Link>
          <Link to="/courses">
            <div className="flex">
              <FaGraduationCap size={25} />
              <span>Courses</span>
            </div>
          </Link>
          <Link to="teachers.html">
            <div className="flex">
              <FaPersonChalkboard size={25} />
              <span>Teachers</span>
            </div>
          </Link>
          <Link to="contact.html">
            <div className="flex">
              <MdContactMail size={25} />
              <span>Contact us</span>
            </div>
          </Link>
        </nav>
      </Sider>
      {/* <Drawer
        placement="left"
        onClose={() => setCollapsed(!collapsed)}
        open={collapsed}
      >
        {listRoom?.map((item, index) => {
          return (
            <Collapse defaultActiveKey={[1]}>
              <Collapse.Panel key={item.idroom} header={item.nameroom}>
                <Menu
                  className="menu"
                  key={index}
                  style={{ backgroundColor: '#6035b2' }}
                >
                  <Menu.Item
                    onClick={() =>
                      handleNavigate('/VideoCall', item.idroom, item.nameroom)
                    }
                    icon={<VideoCameraOutlined />}
                  >
                    VideoCall
                  </Menu.Item>
                  <Menu.Item
                    onClick={() =>
                      handleNavigate('/Chat', item.idroom, item.nameroom)
                    }
                    icon={<MessageFilled />}
                  >
                    Chat
                  </Menu.Item>
                </Menu>
              </Collapse.Panel>
            </Collapse>
          );
        })}
      </Drawer> */}
      <Layout>
        <Header className={`${isScrolled ? 'scroll' : ''} header`}>
          {/* <Row>
            <Col span={21}>
              <Flex align="center">
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
                <Typography.Title level={3}>TrendyT</Typography.Title>
              </Flex>
            </Col>
            <Col span={3}>
              {login || user ? (
                <Flex align="center">
                  <Button
                    type="text"
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                    }}
                  >
                    <Avatar style={{ backgroundColor: '#1677ff' }}>
                      {user ? user?.user_name?.charAt(0).toUpperCase() : ''}
                    </Avatar>
                  </Button>
                  <Button
                    type="text"
                    icon={<LogoutOutlined style={{ fontSize: '20px' }} />}
                    onClick={Logout}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                    }}
                  />
                </Flex>
              ) : (
                <Flex align="center">
                  <Col>
                    <Button
                      type="text"
                      style={{
                        fontSize: '16px',
                        width: 100,
                        height: 64,
                      }}
                      onClick={() => hanldeLogin()}
                    >
                      <h2>Login</h2>
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="text"
                      style={{
                        fontSize: '16px',
                        width: 100,
                        height: 64,
                      }}
                      onClick={handleRegister}
                    >
                      <h2>Register</h2>
                    </Button>
                  </Col>
                </Flex>
              )}
            </Col>
          </Row> */}
          <section className="flex">
            <a href="home.html" className="logo">
              Educa.
            </a>

            <form action="search.html" method="post" className="search-form">
              <input
                type="text"
                name="search_box"
                required
                placeholder="search courses..."
                maxLength={100}
              />
              <button type="submit">
                <IoMdSearch />
              </button>
            </form>

            <div className="icons flex">
              <div>
                <MdMenu />
              </div>
              <div id="toggleButton" onClick={() => setActive(!active)}>
                <FaUser />
              </div>
              <div>
                <FaSun />
              </div>
            </div>

            <div className={`profile ${active ? 'active' : ''} `}>
              <img src={pic1} className="image" alt="" />
              <h3 className="name">shaikh anas</h3>
              <p className="role">studen</p>
              <a href="profile.html" className="btn">
                view profile
              </a>
              <div className="flex-btn">
                <Link to="/" className="option-btn">
                  login
                </Link>
                <Link to="" className="option-btn">
                  register
                </Link>
              </div>
            </div>
          </section>
        </Header>
        <Breadcrumb>
          {breadCump.map((item, index) => {
            return <Breadcrumb.Item key={index}>{item.title}</Breadcrumb.Item>;
          })}
        </Breadcrumb>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            position: 'relative',
          }}
        >
          {user?.role == 'student' ? (
            <Home />
          ) : (
            <Routes>
              <Route path="courses" element={<CoursesAdmin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
          <Spin spinning={spin} fullscreen size="large"></Spin>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutCommon;
