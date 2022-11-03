import Header from "components/Header";
import React from "react";

export default function CollectionCard({ title, children, ...rest }) {
  return (
    <div
      {...rest}
      className="flex flex-col items-center text-center space-y-6 rounded-3xl p-6 bg-[#292929]"
    >
      <div className="w-14 h-14 bg-primary rounded-full" />
      <div className="space-y-2">
        <Header className="text-2xl">{title}</Header>
        <p className="text-gray-400">{children}</p>
      </div>
    </div>
  );
}
