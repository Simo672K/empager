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
    <section className="grid grid-cols-5 gap-4">
      <OverviewCard
        icon={<Profile2User size="30" color="#3b82f6" variant="Bulk" />}
        title="Employees"
      >
        10
      </OverviewCard>
      <OverviewCard
        icon={<Briefcase size="30" color="#3b82f6" variant="Bulk" />}
        title="Customers"
      >
        10
      </OverviewCard>
      <OverviewCard
        icon={<DollarCircle size="30" color="#3b82f6" variant="Bulk" />}
        title="Revenues"
      >
        10
      </OverviewCard>
      <OverviewCard
        icon={<Diagram size="30" color="#3b82f6" variant="Bulk" />}
        title="Profits"
      >
        10
      </OverviewCard>
      <OverviewCard
        icon={<Bill size="30" color="#3b82f6" variant="Bulk" />}
        title="Expenses"
      >
        10
      </OverviewCard>
    </section>
  );
}
export default HPCardsSection;
