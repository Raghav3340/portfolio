import { clientMetrics } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20 text-center">
      <h3 className="head-text text-white-800 mb-10">How My Work Creates Impact</h3>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {clientMetrics.map((item) => (
          <div
            key={`metric-${item.id}`}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <div className="text-4xl">{item.icon}</div>
            <p className="text-4xl font-bold text-white-800 mt-4">{item.value}</p>
            <p className="text-white-500 text-sm text-center mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
