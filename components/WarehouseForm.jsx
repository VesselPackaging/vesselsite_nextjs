import Link from "next/link";

const WarehouseForm = ({ type, order, setOrder, submitting, handleSubmit }) => {
  return (
    <section className="flex-start flex-col w-full max-w-full">
      <h1 className="head_text text-left">
        <span className="text-vp-yellow">{type} Order</span>
      </h1>
      <p className="vessel_sub_text max-w-md">
      Please only submit one SKU/Brand per order. <br></br>
      Additional orders can be added after the order submission. Customer information will be automatically filled out. <br></br>
      Packaging materials such as trays, lids and PakTechs can be added to any order
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 mb-10 w-full max-w-2xl mx-auto flex flex-col gap-7"
      >
        <label>
          <span className="font-roboto text-vp-white font-semibold">
            Location
          </span>
          <input
            type="text"
            value={order.location}
            onChange={(e) => setOrder({ ...order, location: e.target.value })}
            placeholder="Location"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto text-vp-white font-semibold">
            Can Size
          </span>
          <input
            type="text"
            value={order.canSize}
            onChange={(e) => setOrder({ ...order, canSize: e.target.value })}
            placeholder="Can Size"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto text-vp-white font-semibold">
            Number of Cans
          </span>
          <input
            type="number"
            value={order.numberOfCans}
            onChange={(e) =>
              setOrder({ ...order, numberOfCans: e.target.value })
            }
            placeholder="Number of Cans"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-roboto text-vp-white font-semibold">
            Address
          </span>
          <textarea
            value={order.address}
            onChange={(e) => setOrder({ ...order, address: e.target.value })}
            placeholder="Address"
            required
            className="form_textarea"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-vp-white text-sm">
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={submitting}
            >
              {submitting ? `${type}...` : type}
            </button>
        </div>
      </form>
    </section>
  );
};

export default WarehouseForm;
