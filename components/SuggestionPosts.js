import { Image } from 'react-bootstrap';
import Link from 'next/link';

const SuggestionPosts = () => (
  <div id="popular-posts-section">
    <h3 className="section-title-sm">Suggestion Posts</h3>
    <div id="articles-wrapper">
      <div className="article-block">
        <div className="hover">
          <div className="article-img">
            <Link as={`/`} href={`/`}>
              <a>
                <div className="image-wrapper">
                  <Image
                    src="/static/popular-posts/p3.jpg"
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
                <h5 className="category-title">Interviews</h5>
              </a>
            </Link>
            <Link as={`/`} href={`/`}>
              <a>
                <h3 className="article-title">
                  <span>
                    Talking mentors, freelancing, and community with product
                    designer Laura Galbraith
                  </span>
                </h3>
              </a>
            </Link>
            <h6 className="article-author">
              By&nbsp;
              <Link as={`/`} href={`/`}>
                <a>Shwe Yee</a>
              </Link>
            </h6>
          </div>
        </div>
      </div>

      <div className="article-block">
        <div className="hover">
          <div className="article-img">
            <Link as={`/`} href={`/`}>
              <a>
                <div className="image-wrapper">
                  <Image
                    src="/static/popular-posts/p2.jpg"
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
                <h5 className="category-title">Interviews</h5>
              </a>
            </Link>
            <Link as={`/`} href={`/`}>
              <a>
                <h3 className="article-title">
                  <span>
                    Talking mentors, freelancing, and community with product
                    designer Laura Galbraith
                  </span>
                </h3>
              </a>
            </Link>
            <h6 className="article-author">
              By&nbsp;
              <Link as={`/`} href={`/`}>
                <a>Shwe Yee</a>
              </Link>
            </h6>
          </div>
        </div>
      </div>

      <div className="article-block">
        <div className="hover">
          <div className="article-img">
            <Link as={`/`} href={`/`}>
              <a>
                <div className="image-wrapper">
                  <Image
                    src="/static/popular-posts/p1.jpg"
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
                <h5 className="category-title">Interviews</h5>
              </a>
            </Link>
            <Link as={`/`} href={`/`}>
              <a>
                <h3 className="article-title">
                  <span>
                    Talking mentors, freelancing, and community with product
                  </span>
                </h3>
              </a>
            </Link>
            <h6 className="article-author">
              By&nbsp;
              <Link as={`/`} href={`/`}>
                <a>Shwe Yee</a>
              </Link>
            </h6>
          </div>
        </div>
      </div>

      <style jsx>{`
        .article-block {
          margin: 0px 0px 28px;
        }
        .article-img {
          position: relative;
          display: inline-block;
          width: 28%;
          vertical-align: top;
          overflow: hidden;
        }
        .image-wrapper {
          position: relative;
          background-color: #f7f7f7;
          overflow: hidden;
        }
        .article-content {
          display: inline-block;
          width: 67%;
          // max-width: 350px;
          margin: 0px 0px 0px 5%;
        }
        .bg-img {
          position: relative;
          width: 100%;
          height: auto;
        }
        .category-title {
          color: #ff3366;
          text-transform: uppercase;
          z-index: 10;
          position: relative;
          cursor: pointer;
          display: inline-block;
          font: bold 11px/18px 'Roboto', sans-serif;
        }
        .article-title {
          letter-spacing: 0.2px;
          color: rgb(0, 0, 0);
          cursor: pointer;
          font: 500 16px/22px 'Roboto', sans-serif;
          margin: 0px;
        }
        .article-title span {
          background-image: linear-gradient(
            to right,
            rgb(0, 0, 0) 0%,
            rgb(0, 0, 0) 100%
          );
          background-size: 0px 2px;
          background-position: 0px 95%;
          transition: background-size 0.25s
            cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
          padding: 0.1% 0px;
        }
        .article-author {
          color: #999999;
          text-transform: uppercase;
          z-index: 10;
          position: relative;
          cursor: pointer;
          display: inline-block;
          font: bold 11px/18px 'Roboto', sans-serif;
          padding: 12px 0px;
        }
        .article-author a {
          color: #999999;
        }
        .section-title-sm {
          color: #000000;
          font: bold 24px/28px 'Roboto', sans-serif;
          margin: 0px 0px 28px;
        }
      `}</style>
    </div>
  </div>
);
export default SuggestionPosts;
