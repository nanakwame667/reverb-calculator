import "./App.css";
import music from "./assets/images/music.svg";
import loader from "./assets/images/loader.svg";
import Result from "./components/Results";
import { useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCalculate = () => {
    setLoading(true);

    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
      setModalOpen(true);
    }, 2000); // 2 seconds delay
  };
  return (
    <div className="container flex flex-col justify-between ">
      <div className="w-[40%] flex-col justify-center pt-20 space-y-8">
        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className=" text-3xl font-semibold"> Reverb Calculator</h1>
          <img src={music} className="w-96" />
        </div>
        <div className="flex justify-between space-x-4  ">
          <input
            type="number"
            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm  focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none "
            placeholder="Enter your BPM"
          />
          <button
            onClick={handleCalculate}
            disabled={isLoading}
            type="button"
            className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isLoading ? <img src={loader} className="w-2" /> : "Calculate"}
          </button>
        </div>
      </div>
      <Result isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-lg font-medium text-gray-500 "
                      >
                        Reverb Size
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-lg font-medium text-gray-500 "
                      >
                        Pre-Delay
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-lg font-medium text-gray-500 "
                      >
                        Decay Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-lg font-medium text-gray-500 "
                      >
                        Total Reverb
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        John Brown
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        45
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        New York No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Jim Green
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        27
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        London No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        Joe Black
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        31
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        Sidney No. 1 Lake Park
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Result>
      <p>©2023 techup studio</p>
    </div>
  );
}

export default App;
