import Image from "next/image";
import Html from "@src/assets/img/iworkwithIMG/Html.png";
import Css from "@src/assets/img/iworkwithIMG/Css.png";
import Webpack from "@src/assets/img/iworkwithIMG/Webpack.png";
import Bootstrap from "@src/assets/img/iworkwithIMG/Bootstrap.png";
import Tailwind from "@src/assets/img/iworkwithIMG/Tailwind.png";
import Wordpress from "@src/assets/img/iworkwithIMG/Wordpress.png";
import Reactjs from "@src/assets/img/iworkwithIMG/Reactjs.png";
import Nextjs from "@src/assets/img/iworkwithIMG/Nextjs.png";
import Php from "@src/assets/img/iworkwithIMG/Php.png";
import Sql from "@src/assets/img/iworkwithIMG/Sql.png";
import Nodejs from "@src/assets/img/iworkwithIMG/Nodejs.png";
import Mongodb from "@src/assets/img/iworkwithIMG/Mongodb.png";
import PhpmyAdmin from "@src/assets/img/iworkwithIMG/PhpmyAdmin.png";
import Symfony from "@src/assets/img/iworkwithIMG/Symfony.png";

const IworkWith = () => {
  return (
    <section>
      <div className="lg:grid lg:grid-cols-2">
        {/* lg: left column */}
        <div>
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 lg:w-32 lg:h-32">
                <Image src={Html} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Html
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis avril 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 lg:w-32 lg:h-32">
                <Image src={Css} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Css
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis mai 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32 lg:p-4">
                <Image src={Tailwind} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Tailwind
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis juillet 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32 lg:p-4">
                <Image src={Bootstrap} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Bootstrap
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis juillet 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 lg:w-32 lg:h-32">
                <Image src={Webpack} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Webpack
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis septembre 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 lg:w-32 lg:h-32">
                <Image src={Wordpress} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Wordpress
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis septembre 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32 lg:p-4">
                <Image src={Nodejs} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Node js
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis septembre 2022
              </time>
            </li>
          </ol>
        </div>
        {/* lg: right column */}
        <div className="lg:ml-20">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32">
                <Image src={Nextjs} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Next js
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis octobre 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 lg:w-32 lg:h-32">
                <Image src={Reactjs} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                React js
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis octobre 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32 lg:p-4">
                <Image src={Php} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Php
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis octobre 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32 lg:p-4">
                <Image src={PhpmyAdmin} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Php My Admin
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis octobre 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32 lg:p-4">
                <Image src={Sql} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Sql
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis octobre 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32">
                <Image src={Symfony} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Symfony
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis novembre 2022
              </time>
            </li>
            <li class="mb-10 ml-6 lg:pt-10">
              <span class="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-white dark:ring-gray-900 bg-white lg:w-32 lg:h-32 lg:p-4">
                <Image src={Mongodb} />
              </span>
              <h3 class="uppercase mb-2 pl-2 text-lg font-semibold text-gray-900 dark:text-white lg:text-3xl lg:pl-40 lg:pt-6">
                Mongo db
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:pl-40 lg:pt-4">
                Depuis décembre 2022
              </time>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default IworkWith;
