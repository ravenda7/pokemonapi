import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Box from "./Box"

const MainCard = () => {

    return(
        <>
        <Card className="h-[30rem] p-6 flex flex-col overflow-y-auto">
             <div className="flex justify-center flex-wrap gap-4">
                <Box />
            </div>
        </Card>
        </>
    );
};

export default MainCard;
