import React, { useState } from "react";

function ModalBookingOnline() {
  // const [btn, setBtn] = useState(true);
  // const [form, setForm] = useState({
  //   id: "",
  //   picture: "",
  //   name: "",
  //   email: "",
  //   description: "",
  //   jenismember: "",
  //   statusmember: "",
  //   hargakelas: "",
  //   tanggalbooking: "",
  // });

  // const handleImage = (e) => {
  //   const { name, files } = e.target;
  // };

  // const onChange = (e) => {
  //   const { name, value } = e.target;

  //   setForm({
  //     ...from,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoad(true);
  //   try {
  //     PostApi.updateBookingOnline(form).then((res) => setLoad(false));
  //     setShow(!show);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (form.picture !== null && form.name !== "" && form.description !== "") {
  //     setBtn(false);
  //   }
  // }, [form]);

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBookingOnline;
