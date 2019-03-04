import { Image } from 'react-bootstrap';
import Link from 'next/link';
import { Container, Col, Row, Button } from 'react-bootstrap';

const styles = {
  background: '#40333'
};

const RecentPosts = () => (
  <div id="trending-post-section" className={`styles`}>
    <h2 className="section-title">
      <span>Recent Posts</span>
    </h2>
    <h4 className="section-cap">Our best stuff for product designers</h4>
    <Container className="block-wrapper pl-0 pr-0" fluid>
      <Row>
        <Col className="article-block" xs={12} md={4}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/trending-posts/p1.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              {/* <Link as={`/`} href={`/`}>
                                <a>
                                    <h5 className="category-title">Interviews</h5>
                                </a>
                            </Link> */}
              <Link as={`/`} href={`/`}>
                <a>
                  <h3 className="article-title">
                    <span>Webinars</span>
                  </h3>
                  <p className="article-desc">
                    လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                    စာနှင့်စာပေရှိကြ၏။
                  </p>
                </a>
              </Link>

              {/* <h6 className="article-author">
                            By&nbsp;<Link as={`/`} href={`/`}><a>Shwe Yee</a></Link>
                            </h6> */}
            </div>
          </div>
        </Col>
        <Col className="article-block" xs={12} md={4}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/trending-posts/p2.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <Link as={`/`} href={`/`}>
                <a>
                  <h3 className="article-title">
                    <span>Free Design Resources</span>
                  </h3>
                  <p className="article-desc">
                    စာနှင့်စာပေ မရှိသော လူမျိုးငယ်များမှာ ယခုအခါ ကမ္ဘာပေါ်၌
                    ပြောပလောက်အောင် မရှိတော့ချေ။
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </Col>
        <Col className="article-block" xs={12} md={4}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/trending-posts/p3.jpg"
                      alt=""
                      className="bg-img"
                      fluid
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="article-content">
              <Link as={`/`} href={`/`}>
                <a>
                  <h3 className="article-title">
                    <span>Podcast</span>
                  </h3>
                  <p className="article-desc">
                    စာနှင့်စာပေ မရှိသော လူမျိုးငယ်များမှာ ယခုအခါ ကမ္ဘာပေါ်၌
                    ပြောပလောက်အောင် မရှိတော့ချေ။
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button>Invite</Button>
        </Col>
      </Row>
    </Container>
    <style jsx>{`
      .section-title {
        color: rgb(0, 0, 0);
        font: 700 45px/55px 'Roboto', sans-serif;
        margin: 0px 0px 0px;
      }
      .section-cap {
        text-transform: uppercase;
        z-index: 10;
        position: relative;
        cursor: pointer;
        display: inline-block;
        font: bold 11px/16px 'Roboto', sans-serif;
        padding: 0px 0px 12px 0px;
        color: #000000;
      }
      .image-wrapper {
        margin-bottom: 20px;
      }
      .article-title {
        -webkit-letter-spacing: 0.2px;
        -moz-letter-spacing: 0.2px;
        -ms-letter-spacing: 0.2px;
        letter-spacing: 0.2px;
        color: rgb(0, 0, 0);
        cursor: pointer;
        font: 500 18px/24px 'Roboto', sans-serif;
        margin: 0px 0px 8px 0px;
      }
      .article-title span {
        background-image: linear-gradient(
          to right,
          rgb(0, 0, 0) 0%,
          rgb(0, 0, 0) 100%
        );
        background-size: 0px 2px;
        background-position: 0px 95%;
        transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86)
          0s;
        padding: 0.1% 0px;
      }
      .article-desc {
        color: #000000;
        font: 300 16px/22px 'Padauk', sans-serif;
        margin: 0px 0px 16px 0px;
        font-size: 16px !important;
      }
    `}</style>
  </div>
);
export default RecentPosts;
