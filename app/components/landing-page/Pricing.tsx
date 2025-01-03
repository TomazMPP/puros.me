import { TRIAL_DAYS } from "../../lib/config";
import Button from "../ui/Button";

export default function Pricing() {
  return (
    <div className="my-[150px] flex flex-col items-center gap-14">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-4xl font-bold text-white">
        An affordable price for everyone
        </h3>
        <p className="text-content-body text-xl text-center">Join the community of creators and professionals who are already taking their online presence to the next level. <br />Try it free for <strong className="text-accent-pink">{TRIAL_DAYS} days</strong>, no obligation of payment!</p>
      </div>
      <div className="flex items-end gap-9">
      <div className="w-[304px] p-8 flex flex-col gap-7 rounded-2xl border border-[#1E1E1E]">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">Monthly</span>
                <span className="text-content-body">Only</span>
              </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-[48px]">U$1.99</span>
              <span className="text-content-headline text-2xl">/month</span>
          </div>
          <Button variant="secondary">Subscribe</Button>
          </div>
          <div className="flex flex-col">
          <div className="flex justify-center items-center rounded-t-2xl p-2 w-[304px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
            <span className="uppercase text-xs font-bold">
              Recommended
            </span>
          </div>
          <div className="p-[1.6px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] rounded-b-2xl">
              <div className="w-full bg-background-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl">Lifetime</span>
              <span className="text-content-body">Save with</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-[48px]">U$14.99</span>
            </div>
            <Button>Subscribe</Button>
              </div>
          </div>
          </div>
      </div>
    </div>
  )
}