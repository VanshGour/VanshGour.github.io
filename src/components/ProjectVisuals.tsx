import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  Zap, 
  Activity, 
  Radio, 
  Server, 
  Database, 
  Smartphone,
  Layers
} from "lucide-react";

/* -------------------------------------------------------------
   1. UPI PAYMENT ARCHITECTURE VISUAL (Interactive Flow)
------------------------------------------------------------- */
export const UpiVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const steps = [
    { label: "USER CLIENT", sub: "HTTP POST /api/v1/transfer", icon: Smartphone },
    { label: "REST CONTROLLER", sub: "Request Validation & DTO Parse", icon: Server },
    { label: "PAYMENT SERVICE", sub: "Atomic Balance & Ledger Check", icon: Layers },
    { label: "TRANSACTION LOG", sub: "Immutable Audit Reference", icon: Activity },
    { label: "MYSQL DATABASE", sub: "ACID Commit & Row Lock", icon: Database },
  ];

  const triggerSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsSimulating(false);
          setActiveStep(0);
        }, 1200);
      } else {
        setActiveStep(current);
      }
    }, 600);
  };

  return (
    <div className="relative rounded-xl bg-[#060606] border border-white/10 p-5 sm:p-6 overflow-hidden flex flex-col justify-between h-full min-h-[340px]">
      {/* Simulation Header / Trigger */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
          <span className="text-[11px] font-mono text-[#B3B3B3] uppercase tracking-wider">
            TRANSACTION PIPELINE SIMULATOR
          </span>
        </div>
        <button
          type="button"
          onClick={triggerSimulation}
          disabled={isSimulating}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#E50914]/20 hover:bg-[#E50914]/30 border border-[#E50914]/50 text-white text-[11px] font-mono transition-all cursor-pointer disabled:opacity-50"
        >
          {isSimulating ? (
            <>
              <Activity className="w-3 h-3 text-[#FF1A1A] animate-spin" />
              <span>PROCESSING...</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-[#FF1A1A] fill-[#FF1A1A]" />
              <span>TEST TRANSFER ($250)</span>
            </>
          )}
        </button>
      </div>

      {/* Vertical Pipeline Flow */}
      <div className="flex flex-col gap-2.5 my-auto">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isCurrent = isSimulating && activeStep === idx;
          const isDone = isSimulating && activeStep > idx;

          return (
            <React.Fragment key={step.label}>
              <div
                className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#E50914]/15 border-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.35)] scale-[1.02]"
                    : isDone
                    ? "bg-white/[0.04] border-white/20 text-white/90"
                    : "bg-white/[0.02] border-white/[0.06] text-[#737373]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isCurrent
                        ? "bg-[#E50914] text-white"
                        : isDone
                        ? "bg-white/10 text-white"
                        : "bg-white/5 text-[#737373]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-mono font-bold tracking-wide block ${
                        isCurrent ? "text-white" : isDone ? "text-white/90" : "text-[#B3B3B3]"
                      }`}
                    >
                      {step.label}
                    </span>
                    <span className="text-[10px] font-mono text-[#737373]">
                      {step.sub}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-mono">
                  {isCurrent ? (
                    <span className="text-[#FF1A1A] font-bold animate-pulse">ACTIVE</span>
                  ) : isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <span className="text-[#444444]">STAGE 0{idx + 1}</span>
                  )}
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex justify-center -my-1">
                  <div className={`w-[1px] h-3 transition-colors ${
                    isDone ? "bg-[#E50914]" : "bg-white/10"
                  }`} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Footer status */}
      <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#737373]">
        <span>ISOLATION: READ_COMMITTED</span>
        <span>ACID COMPLIANT</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   2. BOLTLY EV COCKPIT DASHBOARD VISUAL
------------------------------------------------------------- */
export const BoltlyVisual: React.FC = () => {
  const [driveMode, setDriveMode] = useState<"ECO" | "SPORT" | "HYPER">("SPORT");
  const batteryLevel = 82;

  const rangeValues = {
    ECO: 420,
    SPORT: 384,
    HYPER: 320,
  };

  return (
    <div className="relative rounded-xl bg-[#070707] border border-white/10 p-5 sm:p-6 overflow-hidden flex flex-col justify-between h-full min-h-[340px]">
      {/* Cockpit Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#E50914]" />
          <span className="font-mono text-xs font-bold text-white tracking-wider">
            BOLTLY EV TELEMETRY
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          READY TO DRIVE
        </div>
      </div>

      {/* Main Gauges Display */}
      <div className="grid grid-cols-2 gap-4 my-auto py-4">
        {/* Battery Gauge */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block mb-1">
            BATTERY LEVEL
          </span>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="font-display font-extrabold text-3xl text-white">
              {batteryLevel}
            </span>
            <span className="text-sm font-mono text-[#E50914] font-bold">%</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#8B0000] via-[#E50914] to-[#FF1A1A] rounded-full transition-all duration-500"
              style={{ width: `${batteryLevel}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#737373] mt-2 block">
            FAST CHARGING SUPPORTED
          </span>
        </div>

        {/* Estimated Range Gauge */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block mb-1">
            EST. RANGE
          </span>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="font-display font-extrabold text-3xl text-white">
              {rangeValues[driveMode]}
            </span>
            <span className="text-sm font-mono text-[#737373]">KM</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#B3B3B3]">
            <span className="w-2 h-2 rounded-full bg-[#E50914]" />
            <span>EFFICIENCY: 15.2 kWh/100km</span>
          </div>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#737373]">DRIVE PROFILE:</span>
        <div className="flex items-center gap-1.5">
          {(["ECO", "SPORT", "HYPER"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setDriveMode(mode)}
              className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                driveMode === mode
                  ? "bg-[#E50914] text-white shadow-[0_0_12px_rgba(229,9,20,0.5)] border border-[#FF1A1A]"
                  : "bg-white/[0.04] text-[#B3B3B3] hover:text-white border border-white/[0.06]"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   3. NETWORK PACKET ANALYZER VISUAL
------------------------------------------------------------- */
export const PacketVisual: React.FC = () => {
  const [packets, setPackets] = useState([
    { proto: "TCP", src: "192.168.1.10:54321", dst: "142.250.190.46:443", length: "64 bytes", status: "ACK" },
    { proto: "HTTP", src: "192.168.1.10:54322", dst: "104.244.42.1:80", length: "512 bytes", status: "GET /api" },
    { proto: "UDP", src: "192.168.1.10:5353", dst: "224.0.0.251:5353", length: "128 bytes", status: "mDNS" },
    { proto: "DNS", src: "192.168.1.10:60120", dst: "8.8.8.8:53", length: "72 bytes", status: "QUERY A" },
  ]);

  const [activeProto, setActiveProto] = useState<string>("ALL");

  useEffect(() => {
    const timer = setInterval(() => {
      const protos = ["TCP", "HTTP", "UDP", "DNS", "ICMP", "TLS"];
      const randomProto = protos[Math.floor(Math.random() * protos.length)];
      const randomPort = Math.floor(Math.random() * 50000) + 10000;
      const newPacket = {
        proto: randomProto,
        src: `192.168.1.10:${randomPort}`,
        dst: `172.217.16.${Math.floor(Math.random() * 254)}:443`,
        length: `${Math.floor(Math.random() * 800) + 40} bytes`,
        status: "PARSED",
      };

      setPackets((prev) => [newPacket, ...prev.slice(0, 3)]);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  const filteredPackets = activeProto === "ALL" ? packets : packets.filter((p) => p.proto === activeProto);

  return (
    <div className="relative rounded-xl bg-[#060606] border border-white/10 p-5 sm:p-6 overflow-hidden flex flex-col justify-between h-full min-h-[340px]">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Radio className="w-4 h-4 text-[#E50914] animate-pulse" />
          <span className="font-mono text-xs font-bold text-white tracking-wider">
            RAW SOCKET SNIFFER
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {["ALL", "TCP", "UDP", "HTTP"].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setActiveProto(p)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                activeProto === p
                  ? "bg-[#E50914] text-white"
                  : "bg-white/5 text-[#737373] hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Protocol Stream List */}
      <div className="space-y-2 my-auto py-2 font-mono text-xs">
        {filteredPackets.map((pkt, i) => (
          <motion.div
            key={`${pkt.src}-${i}-${pkt.length}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                pkt.proto === "TCP" ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" :
                pkt.proto === "HTTP" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                pkt.proto === "UDP" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" :
                "bg-[#E50914]/20 text-[#FF1A1A] border border-[#E50914]/40"
              }`}>
                {pkt.proto}
              </span>
              <div className="flex flex-col">
                <span className="text-white/90 text-[11px]">{pkt.src} → {pkt.dst}</span>
                <span className="text-[9px] text-[#737373]">{pkt.length} • {pkt.status}</span>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400">200 OK</span>
          </motion.div>
        ))}
      </div>

      {/* Footer statistics */}
      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#737373]">
        <span>INTERFACE: eth0 (PROMISCUOUS)</span>
        <span className="text-[#E50914]">STREAM ACTIVE</span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   4. DSA PRACTICE LAB (Interactive Two-Pointer Algorithm)
------------------------------------------------------------- */
export const DsaVisual: React.FC = () => {
  const arr = [2, 7, 11, 15];
  const target = 9;
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);
  const [solved, setSolved] = useState(true);

  const resetOrStep = () => {
    if (solved) {
      setLeft(0);
      setRight(3);
      setSolved(false);
    } else {
      // Step closer
      const sum = arr[left] + arr[right];
      if (sum > target) {
        setRight(1);
        setSolved(true);
      } else if (sum < target) {
        setLeft(0);
        setSolved(true);
      }
    }
  };

  const currentSum = arr[left] + arr[right];

  return (
    <div className="relative rounded-xl bg-[#060606] border border-white/10 p-5 sm:p-6 overflow-hidden flex flex-col justify-between h-full min-h-[340px]">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div>
          <span className="font-mono text-xs font-bold text-white tracking-wider block">
            TWO POINTER ALGORITHM SIMULATOR
          </span>
          <span className="text-[10px] font-mono text-[#737373]">
            Target Sum = {target} | Current = arr[{left}] + arr[{right}] = {currentSum}
          </span>
        </div>
        <button
          type="button"
          onClick={resetOrStep}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-[#E50914]/20 border border-white/10 hover:border-[#E50914]/50 text-white text-[11px] font-mono transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3 text-[#E50914]" />
          <span>{solved ? "DEMO STEP" : "SOLVE"}</span>
        </button>
      </div>

      {/* Array Boxes & Pointers */}
      <div className="my-auto py-6">
        <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
          {arr.map((val, idx) => {
            const isLeft = left === idx;
            const isRight = right === idx;
            const isMatch = isLeft || isRight;

            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Pointer Indicator */}
                <div className="h-6 flex items-center justify-center font-mono text-xs font-bold mb-1">
                  {isLeft && <span className="text-[#FF1A1A] animate-bounce">L →</span>}
                  {isRight && !isLeft && <span className="text-blue-400 animate-bounce">← R</span>}
                </div>

                {/* Array Cell */}
                <div
                  className={`w-full aspect-square rounded-xl flex items-center justify-center font-display font-extrabold text-xl transition-all duration-300 ${
                    isMatch
                      ? "bg-[#E50914]/20 border-2 border-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] scale-105"
                      : "bg-white/[0.03] border border-white/10 text-[#737373]"
                  }`}
                >
                  {val}
                </div>

                <span className="text-[10px] font-mono text-[#555555] mt-1.5">
                  idx: {idx}
                </span>
              </div>
            );
          })}
        </div>

        {/* Algorithm Status Box */}
        <div className="mt-6 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
          {currentSum === target ? (
            <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Target match found: arr[{left}] ({arr[left]}) + arr[{right}] ({arr[right]}) = {target}
            </span>
          ) : (
            <span className="text-xs font-mono text-[#B3B3B3]">
              Searching for target pair...
            </span>
          )}
        </div>
      </div>

      {/* Complexity Footer */}
      <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#737373]">
        <span>TIME COMPLEXITY: O(N)</span>
        <span>SPACE COMPLEXITY: O(1)</span>
      </div>
    </div>
  );
};
