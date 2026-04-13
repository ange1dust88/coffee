import Title from "../ui/title";

function AboutUs1() {
  return (
    <section className="bg-background  py-16 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Title className="text-hero">
              Good Vibes.
              <br />
              Great Coffee.
            </Title>

            <p className="text-hero text-base md:text-lg max-w-xl mx-auto md:mx-0 text-balance">
              At Focus Brew, we serve great coffee and fresh pastries with care
              and passion, creating a warm, cozy space that feels like home.
            </p>
          </div>

          <div className="grid grid-cols-2 max-w-120 mx-auto md:mx-0 ">
            {" "}
            {/* 1 */}{" "}
            <div className="flex flex-col items-center justify-center gap-3 p-6 border-r border-b border-secondary text-center">
              {" "}
              <div className="flex items-center justify-center bg-hero text-background rounded-full p-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  {" "}
                  <path d="M288 64C305.7 64 320 78.3 320 96L320 304L256 304L256 96C256 78.3 270.3 64 288 64zM384 224C401.7 224 416 238.3 416 256L416 320C416 337.7 401.7 352 384 352C366.3 352 352 337.7 352 320L352 256C352 238.3 366.3 224 384 224zM448 288C448 270.3 462.3 256 480 256C497.7 256 512 270.3 512 288L512 352C512 369.7 497.7 384 480 384C462.3 384 448 369.7 448 352L448 288zM157.3 115.2L239.9 304L170.1 304L98.7 140.8C91.6 124.6 99 105.8 115.2 98.7C131.4 91.6 150.2 99 157.3 115.2zM184.3 336.5L184.1 336L280 336C302.1 336 320 353.9 320 376C320 398.1 302.1 416 280 416L224 416C215.2 416 208 423.2 208 432C208 440.8 215.2 448 224 448L280 448C319.8 448 352 415.8 352 376L352 375.4C361.4 380.8 372.3 384 384 384C397.2 384 409.4 380 419.6 373.2C428.3 398.1 452.1 416 480 416C491.7 416 502.6 412.9 512 407.4L512 416C512 504.4 440.4 576 352 576L290.3 576C247.9 576 207.2 559.1 177.2 529.1L165.5 517.5C141.5 493.5 128 460.9 128 427L128 400C128 367.3 152.6 340.3 184.3 336.5z" />{" "}
                </svg>{" "}
              </div>{" "}
              <span className="calistoga text-hero text-lg max-w-40">
                {" "}
                Calm Space for Productivity{" "}
              </span>{" "}
            </div>{" "}
            {/* 2 */}{" "}
            <div className="flex flex-col items-center justify-center gap-3 p-6 border-b border-secondary text-center">
              {" "}
              <div className="flex items-center justify-center bg-hero text-background rounded-full p-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  {" "}
                  <path d="M544 96C460.7 107 377.2 118 294 129C202 141.5 130.7 215.7 125 309C121.7 364.5 143 418.5 182.8 457.2L96 544C179.3 533 262.5 522 345.8 511C437.6 498.5 509.1 424.2 514.5 331.2C518 275.7 496.5 221.7 456.8 183L544 96zM464.3 328.3C460.1 407.8 390.3 467.5 311.5 462.8C232 458.1 170.8 391.8 175.2 311.8C179.7 232.6 249.5 172.5 328.2 177.3C407.5 182 468.7 248.3 464.3 328.3z" />{" "}
                </svg>{" "}
              </div>{" "}
              <span className="calistoga text-hero text-lg max-w-40">
                {" "}
                Specialty Coffee Experience{" "}
              </span>{" "}
            </div>{" "}
            {/* 3 */}{" "}
            <div className="flex flex-col items-center justify-center gap-3 p-6 border-r border-secondary text-center">
              {" "}
              <div className="flex items-center justify-center bg-hero text-background rounded-full p-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  {" "}
                  <path d="M321.5 91.6C320.7 86.2 316.6 81.8 311.2 81C289.1 77.9 266.6 81.9 246.8 92.4L172.8 131.9C153.1 142.4 137.2 158.9 127.4 179L90.7 254.6C80.9 274.7 77.7 297.5 81.6 319.5L96.1 402.3C100 424.4 110.7 444.6 126.8 460.2L187.1 518.6C203.2 534.2 223.7 544.2 245.8 547.3L328.8 559C350.9 562.1 373.4 558.1 393.2 547.6L467.2 508.1C486.9 497.6 502.8 481.1 512.6 460.9L549.3 385.4C559.1 365.3 562.3 342.5 558.4 320.5C557.5 315.2 553.1 311.2 547.8 310.4C496.3 302.2 455 263.3 443.3 213C441.5 205.4 435.3 199.6 427.6 198.4C373 189.7 329.9 146.4 321.4 91.6zM272 208C289.7 208 304 222.3 304 240C304 257.7 289.7 272 272 272C254.3 272 240 257.7 240 240C240 222.3 254.3 208 272 208zM208 400C208 382.3 222.3 368 240 368C257.7 368 272 382.3 272 400C272 417.7 257.7 432 240 432C222.3 432 208 417.7 208 400zM432 336C449.7 336 464 350.3 464 368C464 385.7 449.7 400 432 400C414.3 400 400 385.7 400 368C400 350.3 414.3 336 432 336z" />{" "}
                </svg>{" "}
              </div>{" "}
              <span className="calistoga text-hero text-lg max-w-40">
                {" "}
                Fresh Homemade Desserts{" "}
              </span>{" "}
            </div>{" "}
            {/* 4 */}{" "}
            <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
              {" "}
              <div className="flex items-center justify-center bg-hero text-background rounded-full p-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  {" "}
                  <path d="M320 160C229.1 160 146.8 196 86.3 254.6C73.6 266.9 53.3 266.6 41.1 253.9C28.9 241.2 29.1 220.9 41.8 208.7C113.7 138.9 211.9 96 320 96C428.1 96 526.3 138.9 598.3 208.7C611 221 611.3 241.3 599 253.9C586.7 266.5 566.4 266.9 553.8 254.6C493.2 196 410.9 160 320 160zM272 496C272 469.5 293.5 448 320 448C346.5 448 368 469.5 368 496C368 522.5 346.5 544 320 544C293.5 544 272 522.5 272 496zM200 390.2C188.3 403.5 168.1 404.7 154.8 393C141.5 381.3 140.3 361.1 152 347.8C193 301.4 253.1 272 320 272C386.9 272 447 301.4 488 347.8C499.7 361.1 498.4 381.3 485.2 393C472 404.7 451.7 403.4 440 390.2C410.6 356.9 367.8 336 320 336C272.2 336 229.4 356.9 200 390.2z" />{" "}
                </svg>{" "}
              </div>{" "}
              <span className="calistoga text-hero text-lg max-w-40">
                {" "}
                Fast Wi-Fi & Power Outlets{" "}
              </span>{" "}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="w-full md:w-1/2 flex gap-2 h-80 md:h-150">
          <div className="w-1/2 h-full">
            <img
              src="/about-us/img1.webp"
              alt="about-us-img-1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="w-1/2 flex flex-col gap-2 h-full">
            <img
              src="/about-us/img3.webp"
              alt="about-us-img-2"
              className="w-full h-1/2 object-cover rounded-3xl"
            />

            <img
              src="/about-us/img6.jpg"
              alt="about-us-img-3"
              className="w-full h-1/2 object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs1;
