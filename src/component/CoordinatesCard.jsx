import { useState } from 'react';

const CoordinatesCard = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(coordinates);
  };

  const handleChange = (e) => {
    setCoordinates({
      ...coordinates,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  return (
    <section className="m-16">
      <form
        className="card w-96 p-8 glass shadow-lg flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-bold text-2xl tracking-wider uppercase">
          Coordinates Form
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text capitalize">Latitude</span>
          </label>
          <input
            type="text"
            name="latitude"
            required
            onChange={handleChange}
            placeholder="Coordinates"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text capitalize">Longitude</span>
          </label>
          <input
            type="number"
            name="longitude"
            required
            onChange={handleChange}
            placeholder="Coordinates"
            className="input input-bordered "
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary btn-block uppercase font-bold"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};
export default CoordinatesCard;
