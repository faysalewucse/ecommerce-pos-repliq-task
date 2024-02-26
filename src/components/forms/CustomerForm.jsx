import { useState } from "react";

const CustomerForm = () => {
  const [details, setDetails] = useState([
    { name: "", email: "", phone: "", currency: "", taxId: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newDetails = [...details];
    newDetails[index][field] = value;
    setDetails(newDetails);
  };

  const handleUpdate = () => {
    console.log(details);
  };

  return (
    <div className="p-10">
      {details.map((detail, index) => (
        <div key={index} className="mb-4 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={detail.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={detail.email}
            onChange={(e) => handleChange(index, "email", e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={detail.phone}
            onChange={(e) => handleChange(index, "phone", e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Currency"
            value={detail.currency}
            onChange={(e) => handleChange(index, "currency", e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Tax Id"
            value={detail.taxId}
            onChange={(e) => handleChange(index, "taxId", e.target.value)}
            className="border p-2 rounded"
          />
        </div>
      ))}
      <p className="text-blue-500 ">+ Add more details</p>
      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white px-4 py-2 rounded w-full mt-10"
      >
        Update
      </button>
    </div>
  );
};

export default CustomerForm;
