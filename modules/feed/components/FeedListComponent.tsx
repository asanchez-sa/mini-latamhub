import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import FeedItemComponent from "./FeedItemComponent";

export default function FeedListComponent() {
  return (
    <>
      <FeedItemComponent />
      <FeedItemComponent />
      <FeedItemComponent />
      <FeedItemComponent />
      <FeedItemComponent />
      <FeedItemComponent />
    </>
  );
}
