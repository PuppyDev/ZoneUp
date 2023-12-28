"use client";

import { BotIcon } from "lucide-react";
import React from "react";

const ButtonAI: React.FC = (props) => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="sm" className="flex items-center gap-2">
                        <BotIcon />
                        AI
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="sr-only">Tickup AI Helper</DialogTitle>
                        <Input placeholder="Bạn muốn AI viết gì cho bạn nào?" />
                    </DialogHeader>
                    <div className="grid gap-4 py-4">Hello AI</div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ButtonAI;
