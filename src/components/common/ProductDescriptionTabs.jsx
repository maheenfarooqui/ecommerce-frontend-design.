import { useState } from 'react';
import { Check } from 'lucide-react';
import YouMayLikeSidebar from './YouMayLikeSidebar';

export default function ProductDescriptionTabs() {
  // Main Navigation Active Tab Selection State
  const [activeTab, setActiveTab] = useState('Description');

  const tabHeaders = ['Description', 'Reviews', 'Shipping', 'About seller'];

  const technicalSpecs = [
    { label: 'Model', value: '#8786867' },
    { label: 'Style', value: 'Classic style' },
    { label: 'Certificate', value: 'ISO-898921212' },
    { label: 'Size', value: '34mm x 450mm x 19mm' },
    { label: 'Memory', value: '36GB RAM' },
  ];

  const featureBullets = [
    'Some great feature name here',
    'Lorem ipsum dolor sit amet, consectetur',
    'Duis aute irure dolor in reprehenderit',
    'Some great feature name here',
  ];

  // 📝 Isolated UI Sub-renderer block for Description Segment (DRY optimization)
  const renderDescriptionContent = () => (
    <div className="flex flex-col gap-5 text-left transition-all animate-fadeIn">
      {/* Description Paragraph Text Box */}
      <p className="text-[16px] text-gray-500 m-0 leading-relaxed font-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* Specifications Parameter Table Block Layout */}
      <div className="w-full max-w-[560px] border border-gray-200 rounded-lg overflow-hidden bg-white">
        {technicalSpecs.map((spec, i) => (
          <div key={i} className="flex border-b border-gray-200 last:border-none text-[15px]">
            <div className="w-[180px] bg-[#EFF2F4] text-[#505050] px-4 py-2.5 font-normal box-border shrink-0 border-r border-gray-200">
              {spec.label}
            </div>
            <div className="flex-1 text-[#1C1C1C] px-4 py-2.5 font-normal box-border">
              {spec.value}
            </div>
          </div>
        ))}
      </div>

      {/* Checkmarks Feature Checklist Rows */}
      <div className="flex flex-col gap-2.5">
        {featureBullets.map((text, i) => (
          <div key={i} className="flex items-center gap-2.5 text-[16px] text-gray-500 font-normal">
            <Check className="w-4 h-4 text-gray-400 stroke-[2.5]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 items-start mt-6">
      
      {/* 📑 LEFT BLOCK: Main Intelligent Navigational Tabs Box Panel */}
      <div className="flex-1 border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
        
        {/* Navigation Action Header Strip Bar */}
        <div className="w-full bg-white border-b border-gray-200 flex px-4 gap-2 box-border">
          {tabHeaders.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3.5 text-[16px] font-medium border-0 border-b-2 bg-transparent cursor-pointer transition-all outline-none whitespace-nowrap ${
                activeTab === tab 
                  ? 'border-[#0D6EFD] text-[#0D6EFD]' 
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Core Tab Dynamic Window Viewer Body panel */}
        <div className="p-5 lg:p-6 box-border min-h-[260px]">
          {activeTab === 'Description' && renderDescriptionContent()}
          {activeTab === 'Reviews' && <div className="text-gray-400 text-[15px]">Customer feedback metrics overview setup pending...</div>}
          {activeTab === 'Shipping' && <div className="text-gray-400 text-[15px]">Logistics distribution & custom tracking details...</div>}
          {activeTab === 'About seller' && <div className="text-gray-400 text-[15px]">Merchant legal registration entity summary profile...</div>}
        </div>

      </div>

      {/* 🛒 RIGHT BLOCK: Suggested Items Dynamic Feed Sidebar */}
      <YouMayLikeSidebar />

    </div>
  );
}