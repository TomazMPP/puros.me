"use server"

import { auth } from "../lib/auth";
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

  const session = await auth()
  if (!session) return false
  
  try {
    const linksToUpdate: { [key: string]: Link } = {}
    
    if (link1?.title && link1?.url) {
      linksToUpdate.link1 = link1
    }
    
    if (link2?.title && link2?.url) {
      linksToUpdate.link2 = link2
    }
    
    if (link3?.title && link3?.url) {
      linksToUpdate.link3 = link3
    }

    await db.collection("profiles").doc(profileId).update(linksToUpdate)
    return true
  } catch (error) {
    console.error("Error adding custom links: ", error)
    return false
  }
}