import React from "react";
import Input from "../../../Components/Share/Input";
import TextArea from "../../../Components/Share/TextArea";
import { DropDown, Label } from "./Handler";

export default function Contact({ register }) {
  return (
    <div>
      <div className="space-y-4 first:space-y-5">
        <h1 className="text-textHeader font-medium text-lg">
          Contact Information
        </h1>
        <div className="space-y-2 ">
          <Label title={"Email Address"} />
          <Input
            required
            placeholder="Email ...."
            name="email"
            register={{ ...register("email") }}
          />
        </div>
        <div className="space-y-2 relative">
          <Label title={"Phone Number"} />
          <Input
            required
            placeholder="Phone number ...."
            className="pl-32"
            type="number"
            register={{ ...register("phone") }}
          />
          <DropDown />
        </div>
        <div className="space-y-2 relative">
          <Label title={"Alternative Phone Number (Optional)"} />
          <Input
            placeholder="Alternative Number- ...."
            className="pl-32"
            type="number"
            register={{ ...register("altPhone") }}
          />
          <DropDown />
        </div>
      </div>
      <div className="space-y-4 first:space-y-5 pt-12">
        <h1 className="text-textHeader font-medium text-lg">
          Shipping address
        </h1>
        <div className="flex space-x-3.5">
          <div className="space-y-2 w-full">
            <Label title={"First Name"} />
            <Input
              required
              placeholder="Enter your first name"
              name="firstName"
              register={{ ...register("firstName") }}
            />
          </div>
          <div className="space-y-2 w-full">
            <Label title={"Last Name"} />
            <Input
              required
              placeholder="Enter your last name"
              name="lastName"
              register={{ ...register("lastname") }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label title="Address" />
          <Input
            placeholder="Enter your address"
            required
            name="address"
            register={{ ...register("address") }}
          />
        </div>
        <div className="flex space-x-3.5">
          <div className="space-y-2">
            <Label title="City" />
            <Input
              required
              placeholder="Enter your City"
              name="city"
              register={{ ...register("city") }}
            />
          </div>
          <div className="space-y-2">
            <Label title="Area" />
            <Input
              required
              placeholder="Enter your area"
              name="area"
              register={{ ...register("area") }}
            />
          </div>
          <div className="space-y-2">
            <Label title="Zip code" />
            <Input
              required
              placeholder="Enter your zip"
              name="zip"
              register={{ ...register("zip") }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label title="Delivery Instructions (Optional)" />
          <TextArea
            required
            placeholder="Enter your delivery instructions"
            name="delivery"
            register={{ ...register("delivery") }}
          />
        </div>
      </div>
    </div>
  );
}
