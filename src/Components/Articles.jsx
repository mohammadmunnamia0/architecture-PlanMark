import Article1Img from "../assets/Artecials/1.jpg"
import Article2Img from "../assets/Artecials/2.jpg"
import Article3Img from "../assets/Artecials/3.jpg"
import Article4Img from "../assets/Artecials/4.jpg"
function Articles() {
  return (
    <div className="mt-20">
      <section className=" sm:py-12 bg-[#fae9db]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "",
          }}
        ></div>
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-xl text-[#ECA76E] ">Our Blog</h2>
            <h2 className="text-3xl font-bold">Recent Article</h2>
            <p className="font-serif text-sm dark:text-gray-600">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4 m-8">
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href=""
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={Article1Img}
                />
              </a>
              <div className="flex justify-between">
                <p>Oct 15,2023</p>
                <p>By : Architecture</p>
              </div>
              <div className="flex flex-col flex-1 mt-4">
                <h3 className="flex-1 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className=" pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>
                    <button className="btn hover:bg-[#ECA76E] text-dark">
                      View All
                    </button>
                  </span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href=""
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={Article2Img}
                />
              </a>
              <div className="flex justify-between">
                <p>Oct 15,2023</p>
                <p>By : Architecture</p>
              </div>
              <div className="flex flex-col flex-1 mt-4">
                <h3 className="flex-1 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className=" pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>
                    <button className="btn hover:bg-[#ECA76E] text-dark">
                      View All
                    </button>
                  </span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href=""
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={Article3Img}
                />
              </a>
              <div className="flex justify-between">
                <p>Oct 15,2023</p>
                <p>By : Architecture</p>
              </div>
              <div className="flex flex-col flex-1 mt-4">
                <h3 className="flex-1 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className=" pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>
                    <button className="btn hover:bg-[#ECA76E] hover:text-white text-dark">
                      View All
                    </button>
                  </span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-50">
              <a
                rel="noopener noreferrer"
                href=""
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src={Article4Img}
                />
              </a>
              <div className="flex justify-between">
                <p>Oct 15,2023</p>
                <p>By : Architecture</p>
              </div>
              <div className="flex flex-col flex-1 mt-4">
                <h3 className="flex-1 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className=" pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span>
                    <button className="btn hover:bg-[#ECA76E] text-dark">
                      View All
                    </button>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Articles;
