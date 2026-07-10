import { axiosInstant } from "@/lib/axiosInstance";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import IsSubmitting from "../isSubmitting";
import { useNavigate } from "react-router-dom";
function AccountForm() {
  const [formData, setFormData] = useState({
    name: "",
    accountNumber: "",
    type: "",
    balance: 0,
    isDefault: false,
    status: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstant.post("/finance/accounts", formData);
      console.log("Account added successfully:", response.data);
      toast.success("Account added successfully");
      navigate(0);
    } catch (error) {
      console.error("Error adding account:", error);
      toast.error("Failed to add account");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form action="" className="w-full" onSubmit={handleSubmit}>
      <div>
        <div className="form-control w-full">
          <label className="label font-medium text-sm">Back name</label>
          <input
            type="text"
            value={formData.name}
            placeholder="Enter Bank name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="form-control w-full">
        <label className="label font-medium text-sm">Account number</label>
        <input
          type="text"
          value={formData.accountNumber}
          placeholder="Enter account number"
          onChange={(e) =>
            setFormData({ ...formData, accountNumber: e.target.value })
          }
          required
          className="input input-bordered w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-control w-full">
          <label className="label font-medium text-sm">Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
            className="input input-bordered w-full"
          >
            <option value="" className="text-secondary bg-black">
              Select type
            </option>
            <option value="saving" className="text-secondary bg-black">
              Saving
            </option>
            <option value="current" className="text-secondary bg-black">
              Current
            </option>
            <option value="fixed" className="text-secondary bg-black">
              Fixed
            </option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label font-medium text-sm">Balance</label>
          <input
            type="number"
            value={formData.balance}
            onChange={(e) =>
              setFormData({ ...formData, balance: e.target.value })
            }
            required
            className="input input-bordered w-full"
          />
        </div>
      </div>

      <div className="form-control w-full">
        <label className="label font-medium text-sm">Status</label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          required
          className="input input-bordered w-full"
        >
          <option value="" className="text-secondary bg-black">
            Select status
          </option>
          <option value="Active" className="text-secondary bg-black">
            Active
          </option>
          <option value="Inactive" className="text-secondary bg-black">
            Inactive
          </option>
        </select>
      </div>
      <div className="flex items-center gap-2  w-full mt-2">
        <input
          type="checkbox"
          className="checkbox checkbox-warning size-5"
          value={formData.isDefault}
          onChange={(e) =>
            setFormData({ ...formData, isDefault: e.target.checked })
          }
        />
        <label className="label font-medium text-sm">Default account</label>
      </div>
      <button type="submit" className="btn btn-info mt-4 w-full text-white">
        {loading && <IsSubmitting />}Submit
      </button>
    </form>
  );
}

export default AccountForm;
