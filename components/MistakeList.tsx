import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';


type Mistake = {
    mistake: string;
    suggestion: string;
    start_index: number;
    end_index: number
  }

const GrammarMistakesList = ({ mistakes }: { mistakes: Mistake[] }) => {

  return (
    <div style={{scrollbarWidth:"none"}} className="lg:h-[600px] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 ">Grammar Mistakes</h2>
      <div className="space-y-4">
        {mistakes?.length > 0 ? (
          mistakes?.map((mistake, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-indigo-100 overflow-hidden">
              <div className="bg-indigo-50 px-4 py-2 flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                <span className="font-medium text-indigo-800">Mistake {index + 1}</span>
              </div>
              <div className="p-4 space-y-2">
                <p className="text-red-600 flex items-start">
                  <span className="font-semibold text-gray-700 mr-2 mt-1">
                    <AlertCircle className="w-4 h-4" />
                  </span>
                  {mistake.mistake}
                </p>
                <p className="text-green-600 flex items-start">
                  <span className="font-semibold text-gray-700 mr-2 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  {mistake.suggestion}
                </p>
               
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl border p-4 text-center text-gray-500">
            No mistakes found.
          </div>
        )}
      </div>
    </div>
  );
};

export default GrammarMistakesList;