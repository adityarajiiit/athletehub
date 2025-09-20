import React from "react";
import { useState } from "react";
function AccountForm() {
  const [formData, setFormData] = useState({
    accountname: "",
    type: "",
    balance: 0,
    isDefault: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  });
  return (
    <form action="" className="w-full">
      <div className="form-control w-full">
        <label className="label font-medium text-sm">Account name</label>
        <input
          type="text"
          value={formData.accountname}
          placeholder="Enter account name"
          onChange={(e) =>
            setFormData({ ...formData, accountname: e.target.value })
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
      <div className="grid grid-cols-2 gap-4">
        <div className="form-control w-full">
          <label className="label font-medium text-sm">Default account</label>
          <select
            value={formData.isDefault}
            onChange={(e) =>
              setFormData({ ...formData, isDefault: e.target.value })
            }
            required
            className="input input-bordered w-full"
          >
            <option value="" className="text-secondary bg-black">
              Select options
            </option>
            <option value={true} className="text-secondary bg-black">
              Yes
            </option>
            <option value={false} className="text-secondary bg-black">
              No
            </option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label font-medium text-sm">Status</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
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
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-control w-full">
          <label className="label font-medium text-sm">Created at</label>
          <input
            type="date"
            value={formData.createdAt}
            onChange={(e) =>
              setFormData({ ...formData, createdAt: e.target.value })
            }
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label font-medium text-sm">Last updated at</label>
          <input
            type="date"
            value={formData.updatedAt}
            onChange={(e) =>
              setFormData({ ...formData, updatedAt: e.target.value })
            }
            required
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-info mt-4 w-full text-white">
        Submit
      </button>
    </form>
  );
}

export default AccountForm;
