"use client";

import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Avvvatars from "avvvatars-react";
import { Badge } from "@/components/ui/badge";
import ExpandableTextComponent from "./ExpandableTextComponent";

export default function FeedItemComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lecture Reschedulingss.</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex items-center gap-4">
            <Avvvatars value="best_user@gmail.com" style="shape" />

            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">Olivia Martin</p>
              <p className="text-sm text-muted-foreground">
                olivia.martin@email.com
              </p>
            </div>
            <div className="ml-auto">
              <Badge className="mr-2">Badge</Badge>
              <Badge>Badge</Badge>
            </div>
          </div>

          <ExpandableTextComponent
            text="New Yorkers are facing the winter chill with less warmth this year as
          the city's most revered soup stand unexpectedly shutters, following a
          series of events that have left the community puzzled."
            maxLength={150}
          />
        </div>
      </CardContent>
    </Card>
  );
}
