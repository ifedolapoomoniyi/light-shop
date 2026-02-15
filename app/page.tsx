"use client";

import { useLightStore } from "@/store/useLightStore";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { LampCard } from "@/components/LampCard";
import NewLampCard from "@/components/NewLampCard";

const LAMPS = [
	{ id: 1, name: "Aero Pendant", price: "$120", imageSrc: "/images/lamp2.png", srcDayOn: "/images/TallLampDayOn.png", srcDayOff: "/images/TallLampDayOff.png", srcNightOn: "/images/TallLampNightOn.png", srcNightOff: "/images/TallLampNightOff.png" },
	{ id: 2, name: "Orbital Desk", price: "$85", imageSrc: "/images/lamp2.png", srcDayOn: "/images/DeskLampDayOn.png", srcDayOff: "/images/DeskLampDayOff.png", srcNightOn: "/images/DeskLampNightOn.png", srcNightOff: "/images/DeskLampNightOff.png" },
	{ id: 3, name: "Nova Floor", price: "$210", imageSrc: "/images/lamp3.png",srcDayOn: "/images/AlienLampDayOn.png", srcDayOff: "/images/AlienLampDayOff.png", srcNightOn: "/images/AlienLampNightOn.png", srcNightOff: "/images/AlienLampNightOff.png" },
];

export default function Home() {
	const { isMasterOn, toggleMaster, isLampOn, toggleLamp } = useLightStore();

	return (
		<motion.div
			className="flex min-h-screen flex-col bg-zinc-950 text-white items-center justify-center cursor-pointer transition"
			animate={
				{
					backgroundColor: isMasterOn ? "#f8f8f8" : "#0a0a0a",
					"--master-light": isMasterOn ? 1 : 0,
					color: isMasterOn ? "#0a0a0a" : "#f8f8f8",
				} as any
			}
			transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
		>
			{isMasterOn ? "The lights are ON" : "The lights are OFF"}
			{isLampOn ? <p className="mt-4">The lamp is ON</p> : <p className="mt-4">The lamp is OFF</p>}
			<div onClick={toggleLamp}>
				<Switch
					onClick={toggleLamp}
					checked={isLampOn}
					onCheckedChange={toggleLamp}
					className="ml-4"
				/>
			</div>
			<div onClick={toggleMaster}>
				<Switch
					checked={isMasterOn}
					onCheckedChange={toggleMaster}
					className="ml-4"
				/>
				<div className="flex flex-row gap-5">
					{LAMPS.map((lamp) =>(
						<NewLampCard key={lamp.id} {...lamp} />
					))}
				</div>
			</div>
		</motion.div>
	);
}
