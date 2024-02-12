import React from "react";
import { Contact as ContactForm } from "../components/form/Contact";
import { Image } from "../components/img/Image";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import Banner from "../components/banner/Banner";
import { Banner as ImgBanner } from "../components/img/Image";
const Contact = () => {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="">
      <Banner
        image={ImgBanner.Banner2}
        header="Contact"
        text="Home / Pages / Contact"
      />
      <div className="bg-primary pt-14">
        <div className="inner-wrap max-w-1240px my-0 mx-auto">
          <div className="text-center text-white font-Roboto-Slab">
            <h1 className="text-3xl font-bold mb-4">Get in touch with us</h1>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <FaMapLocationDot className="block m-0 mx-auto size-9" />
                <h2 className="text-xl font-bold mb-2">Location</h2>
                <p>No.225, Yaw Gi kyung Street, Hlaing Township, Yangon</p>
              </div>
              <div>
                <LiaPhoneVolumeSolid className="block m-0 mx-auto size-9" />
                <h2 className="text-xl font-bold mb-2">Phone</h2>
                <p>01264445</p>
                <p>+95 9779779779</p>
              </div>
              <div>
                <MdMarkEmailUnread className="block m-0 mx-auto size-9" />
                <h2 className="text-xl font-bold mb-2">Email</h2>
                <p>info@journeyjoy.com</p>
              </div>
            </div>
            <ContactForm onSubmit={handleSubmit} />
          </div>
        </div>
        <div className="mt-8 text-center text-white">
          <h2 className="text-6xl font-bold mb-4">Location</h2>
          <img src={Image.LocationMap} className="w-full" alt="This is location" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
