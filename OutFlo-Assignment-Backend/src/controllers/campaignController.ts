import { Request, Response } from "express";
import Campaign from "../models/campaignModel";

export const getCampaigns = async (_: Request, res: Response) => {
  const campaigns = await Campaign.find({ status: { $ne: "DELETED" } });
  res.json(campaigns);
};

export const getCampaign = async (req: Request, res: Response) => {
  const campaign = await Campaign.findById(req.params.id);
  campaign ? res.json(campaign) : res.status(404).json({ error: "Not found" });
};

export const createCampaign = async (req: Request, res: Response) => {
  const campaign = await Campaign.create(req.body);
  res.status(201).json(campaign);
};

export const updateCampaign = async (req: Request, res: Response) => {
  const updated = await Campaign.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

export const deleteCampaign = async (req: Request, res: Response) => {
  const campaign = await Campaign.findByIdAndUpdate(
    req.params.id,
    { status: "DELETED" },
    { new: true }
  );
  res.json({ message: "Campaign deleted (soft)", campaign });
};
