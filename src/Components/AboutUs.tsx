import React from "react";
import images from "../Assets/img";

const AboutUs = () => {
  return (
    <section className="mt-10" id="aboutus">
      <p className="text-sky-500 font-bold text-center mx-4 text-3xl">
        About Us
      </p>
      <section className="flex md:flex-row justify-around items-center mt-8 flex-col-reverse mx-4">
        <div className="md:w-[40%] w-[90%]">
          <h2 className="font-bold text-2xl md:text-left text-slate-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="md:text-left text-lg text-sky-500 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nisi
            repudiandae maiores quibusdam molestias, sunt voluptates, qui hic
            eligendi aliquid quos ad. Dolores iste repudiandae, nostrum dolore
            sed quae nobis aperiam obcaecati distinctio sint, voluptatibus
            praesentium adipisci quis sapiente nesciunt doloremque illum dicta
            aliquid libero aspernatur! Nesciunt, repudiandae repellendus
            blanditiis consequuntur sequi magnam facilis eaque. Explicabo
            accusantium ipsam error qui libero quis fugiat ipsa tempore labore
            magni hic dolorem, itaque, adipisci laboriosam minima, reiciendis
            minus laborum voluptate facere. Dignissimos rem laudantium ducimus
            illo eius vitae totam voluptatem facere delectus perferendis ab,
            officiis possimus harum itaque. Tempora voluptas in expedita, dicta
            commodi deserunt quo ab aliquid quia voluptatem magnam magni non
            rerum neque! Qui, dignissimos. Nisi dolore consectetur eligendi,
            sequi iste provident! Numquam dolor quia at omnis corporis
            doloremque unde, nihil aliquam quasi dignissimos ut, amet fugit
            ipsum dolore. Iusto distinctio ipsam voluptatum quod, expedita neque
            quis. Repellendus, neque saepe vel quis odit, maiores temporibus ad
            molestiae deleniti odio laudantium et nobis molestias iste? Suscipit
            quos in soluta officia hic provident ducimus aliquam voluptatum
            ratione, excepturi non facilis veritatis libero nam fugit fuga ad
            cum modi atque aut, quaerat, natus rerum. Dolorum perferendis
            dolores quo voluptates laboriosam, tempore doloribus maiores
            officiis!
          </p>
        </div>
        <div>
          <img src={images.aboutus} alt="Description" className="" />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
