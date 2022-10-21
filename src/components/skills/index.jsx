import Image from "next/image";
import Html from "@src/assets/img/Html.png";
import Css from "@src/assets/img/Css.png";
import Javascript from "@src/assets/img/Javascript.png";
import Webpack from "@src/assets/img/Webpack.png";
import Bootstrap from "@src/assets/img/Bootstrap.png";
import Tailwind from "@src/assets/img/Tailwind.png";
import Wordpress from "@src/assets/img/Wordpress.png";
import Reactjs from "@src/assets/img/Reactjs.png";
import Nextjs from "@src/assets/img/Nextjs.png";
import Php from "@src/assets/img/Php.png";
import Sql from "@src/assets/img/Sql.png";
import Nodejs from "@src/assets/img/Nodejs.png";
import Git from "@src/assets/img/Git.png";
import Npm from "@src/assets/img/Npm.png";

let styles = {
};

const Skills = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <Image src={Html} title="Html" />
          </div>
          <div>
            <Image src={Css} title="Css" />
          </div>
          <div>
            <Image src={Javascript} title="Javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
