import { Image } from 'react-bootstrap';
import Link from 'next/link';

const EditorChoicePost = () => (
  <div id="editor-choice-section">
    <div>
      <div className="article-img">
        <Link as={`/`} href={`/`}>
          <a>
            <div className="image-wrapper">
              <Image src="/static/editor-choice-post-1.jpg" />
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
            <h2 className="article-title">
              <span>101 quotes about design and creativity</span>
            </h2>
          </a>
        </Link>
        <p className="article-desc">
          လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
          စာနှင့်စာပေရှိကြ၏။ စာနှင့်စာပေ မရှိသော လူမျိုးငယ်များမှာ ယခုအခါ
          ကမ္ဘာပေါ်၌ ပြောပလောက်အောင် မရှိတော့ချေ။
        </p>
        <h6 className="article-author">
          By&nbsp;
          <Link as={`/`} href={`/`}>
            <a>Shwe Yee</a>
          </Link>
        </h6>
      </div>
    </div>
    <style jsx>{`
      .image-wrapper {
        position: relative;
        width: 100%;
        height: 45.2vw;
        max-height: 60vh;
        margin: 0px 0px 5vh;
        overflow: hidden;
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
        color: #000000;
        cursor: pointer;
        letter-spacing: -0.1px;
        font: 700 34px/44px 'Roboto', sans-serif;
        margin: 12px 0px 16px;
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
        // font: 300 16px/22px "Source Sans Pro",sans-serif;
        font: 300 16px/22px 'Padauk', sans-serif;
        margin: 0px 0px 16px 0px;
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
      @media (max-height: 1000px) and (min-width: 900px) {
        .image-wrapper {
          max-height: 50vh;
        }
      }
    `}</style>
  </div>
);
export default EditorChoicePost;
