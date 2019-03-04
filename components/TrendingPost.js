import { Image } from 'react-bootstrap';
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';

// const styles = {
//   background: 'red'
// };

const TrendingPost = () => (
  <div id="trending-post-section">
    <h2 className="section-title">
      <span>Trending Post</span>
    </h2>
    <h4 className="section-cap">Our best stuff for product designers</h4>

    <Container className="block-wrapper pl-0 pr-0" fluid>
      <Row>
        <Col className="article-block" xs={12} md={3}>
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
                </a>
              </Link>
              <p className="article-desc">
                လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
                စာနှင့်စာပေရှိကြ၏။
              </p>
              {/* <h6 className="article-author">
                            By&nbsp;<Link as={`/`} href={`/`}><a>Shwe Yee</a></Link>
                            </h6> */}
            </div>
          </div>
        </Col>
        <Col className="article-block" xs={12} md={3}>
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
        <Col className="article-block" xs={12} md={3}>
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
        <Col className="article-block" xs={12} md={3}>
          <div className="hover">
            <div className="article-img">
              <Link as={`/`} href={`/`}>
                <a>
                  <div className="image-wrapper">
                    <Image
                      src="/static/trending-posts/p4.jpg"
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
                    <span>E-Courses</span>
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
    </Container>
    <style jsx>{`
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
export default TrendingPost;
