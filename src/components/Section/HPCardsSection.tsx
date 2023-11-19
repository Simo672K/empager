import {
  Profile2User,
  Briefcase,
  DollarCircle,
  Diagram,
  Bill,
} from "iconsax-react";
import OverviewCard from "../Card/OverviewCard";
function HPCardsSection() {
  return (
    <section className="mx-10 mt-10 grid grid-cols-5 gap-4">
      <OverviewCard
        icon={<Profile2User size="30" color="#3b82f6" variant="Bulk" />}
        title="Active Employees"
      >
        10
      </OverviewCard>
      <OverviewCard
        icon={<Briefcase size="30" color="#3b82f6" variant="Bulk" />}
        title="Active Customers"
      >
        10
      </OverviewCard>
      <OverviewCard
        icon={<DollarCircle size="30" color="#3b82f6" variant="Bulk" />}
        title="Your Revenues"
      >
        10
      </OverviewCard>
      <OverviewCard
        icon={<Diagram size="30" color="#3b82f6" variant="Bulk" />}
        title="Your Profits"
      >
        10
      </OverviewCard>
      <OverviewCard
        icon={<Bill size="30" color="#3b82f6" variant="Bulk" />}
        title="Your Expenses"
      >
        10
      </OverviewCard>
    </section>
  );
}
export default HPCardsSection;
