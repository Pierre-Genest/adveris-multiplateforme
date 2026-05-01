import { useEffect } from "react";
import { trackOnce } from "../../store/analyticsStore";

type Props = {
  goal: string;
  props?: Record<string, string | number | boolean>;
};

export default function TrackMount({ goal, props }: Props) {
  const trackingKey = props ? `${goal}:${JSON.stringify(props)}` : goal;
  useEffect(() => {
    trackOnce(goal, props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackingKey]);
  return null;
}
