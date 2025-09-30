
const Specifications = ({product}:{product : {features:string[],specifications: { label: string; value: string; }[]; }}) => {
  return (
    <section className="bg-white rounded-sm mt-4 text-neutral-dark mb-4">
      <div className="py-3 border-b border-gray-200">
        <h3 className="text-xl font-medium px-3">Specification</h3>
      </div>
      <section className="flex items-stretch justify-between px-3 py-2 text-sm">
        <div className="w-19/39 rounded-sm border border-gray-300">
          <div className="py-3 border-b border-gray-200">
            <h5 className="font-medium px-3 uppercase">Features</h5>
          </div>
          <ul className="list-disc space-y-2 pl-7 pr-3 py-4">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="text-base"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-19/39 rounded-sm border border-gray-300">
          <div className="py-3 border-b border-gray-200">
            <h5 className=" text-sm font-medium px-3 uppercase">
              Specifications
            </h5>
          </div>
          <ul className="space-y-2 p-3">
            {product.specifications.map((specification, index) => (
              <li
                key={index}
                className="text-base"
              >
                <strong>{specification.label}:</strong> {specification.value}
                </li>   
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Specifications;
