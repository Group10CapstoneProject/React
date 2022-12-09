import React from "react";
import trainerImage from "../assets/images/trainer.png";

function Trainer() {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-close border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium pt-15 pl-10">
          <a href="/">Dilatih oleh trainer profesional</a>
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <br />
      <div className="card w-96 bg-info shadow-xl">
        <figure>
          <img src={trainerImage} alt="trainer" />
        </figure>
        <div className="card-body bg-secondary">
          <h2 className="card-title">
            <b>Mark William</b>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
            </div>
          </h2>
          <p>Endurance, Tone & Shape, Pow...</p>
          <p>
            Mulai dari <b className="text-primary">RP 150.000</b>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <a href="/detailpelatih">
                <b>Detail Pelatih</b>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="card w-96 bg-info shadow-xl">
        <figure>
          <img src={trainerImage} alt="trainer" />
        </figure>
        <div className="card-body bg-secondary">
          <h2 className="card-title">
            <b>Mark William</b>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
            </div>
          </h2>
          <p>Endurance, Tone & Shape, Pow...</p>
          <p>
            Mulai dari <b className="text-primary">RP 150.000</b>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <a href="/detailpelatih">
                <b>Detail Pelatih</b>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="card w-96 bg-info shadow-xl">
        <figure>
          <img src={trainerImage} alt="trainer" />
        </figure>
        <div className="card-body bg-secondary">
          <h2 className="card-title">
            <b>Mark William</b>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
            </div>
          </h2>
          <p>Endurance, Tone & Shape, Pow...</p>
          <p>
            Mulai dari <b className="text-primary">RP 150.000</b>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <a href="/detailpelatih">
                <b>Detail Pelatih</b>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="card w-96 bg-info shadow-xl">
        <figure>
          <img src={trainerImage} alt="trainer" />
        </figure>
        <div className="card-body bg-secondary">
          <h2 className="card-title">
            <b>Mark William</b>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-primary"
              />
            </div>
          </h2>
          <p>Endurance, Tone & Shape, Pow...</p>
          <p>
            Mulai dari <b className="text-primary">RP 150.000</b>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <a href="/detailpelatih">
                <b>Detail Pelatih</b>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Trainer;
