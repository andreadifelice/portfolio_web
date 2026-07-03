import { MotionDivProps } from "@/lib/utils";
import {motion} from 'framer-motion'

export function AnimatedBox({
    animated,
    className,
    motionProps,
    children,
}: {
    animated: boolean;
    className?: string;
    motionProps?: Pick<MotionDivProps, 'initial' | 'animate' | 'transition'>;
    children?: React.ReactNode;
}) {
    if (!animated) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div className={className} {...motionProps}>
            {children}
        </motion.div>
    );
}