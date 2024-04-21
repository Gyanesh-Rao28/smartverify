import { ShieldPlus,TriangleAlertIcon } from 'lucide-react';



interface ScanResultProps {
  DelegateCallVulnerability?: string;
  IntegerOverflowVulnerability?: string;
  ReentrancyVulnerability?: string;
  TimestampDependencyVulnerability?: string;
}

export const ScanResult = ({
  DelegateCallVulnerability,
  IntegerOverflowVulnerability,
  ReentrancyVulnerability,
  TimestampDependencyVulnerability
}: ScanResultProps) => {
  const renderVulnerabilityStatus = (vulnerability: string | undefined) => {
    return vulnerability === "The vulnerability exists" ? (
      <div className="flex items-center gap-2 text-red-500">
        <TriangleAlertIcon />
        <span>High Risk</span>
      </div>
    ) : (
      <div className="flex items-center gap-2 text-green-500">
        <ShieldPlus />
        <span>Secure</span>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="mb-6">
        <p className="text-lg font-semibold">Overall Risk Level</p>
        <p className="text-lg text-blue-300 font-semibold">MODERATE</p>
      </div>

      <div>
        <p className="text-lg font-semibold mb-4">Risk Ratings</p>
        <div className="space-y-4">
          <div className="bg-gray-700 p-3 rounded-full flex justify-between items-center">
            <h1 className="text-md font-semibold">Delegate Call Vulnerability:</h1>
            {renderVulnerabilityStatus(DelegateCallVulnerability)}
          </div>

          <div className="bg-gray-700 p-3 rounded-full flex justify-between items-center">
            <h1 className="text-md font-semibold">Integer Overflow Vulnerability:</h1>
            {renderVulnerabilityStatus(IntegerOverflowVulnerability)}
          </div>

          <div className="bg-gray-700 p-3 rounded-full flex justify-between items-center">
            <h1 className="text-md font-semibold">Reentrancy Vulnerability:</h1>
            {renderVulnerabilityStatus(ReentrancyVulnerability)}
          </div>

          <div className="bg-gray-700 p-3 rounded-full flex justify-between items-center">
            <h1 className="text-md font-semibold">Timestamp Dependency Vulnerability:</h1>
            {renderVulnerabilityStatus(TimestampDependencyVulnerability)}
          </div>
        </div>
      </div>
    </div>
  );
};
