"use server"

import { db } from "../lib/firebase";

export type Link = {
  title: string;
  url: string;
}

export default async function addCustomLinks({
  profileId,
  link1,
  link2,
  link3,
}: {
  profileId: string;
  link1: Link;
  link2: Link;
  link3: Link;
}) {

  try {
    await db.collection("profiles").doc(profileId).update({
      link1,
      link2,
      link3,
    })
  } catch (error) {
    console.error("Error adding custom links: ", error)
    return false
  }
}