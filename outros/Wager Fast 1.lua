--Wager Fast 1

chance1 = 98
chance2 = 62.27
bethigh = true
basebet = 0.001
nextbet = basebet

function resetSeed()
    resetseed()
    sleep(0)
end

function dobet()
    --Strategy
    if (win) then
        nextbet = basebet
    else
        nextbet = previousbet + (previousbet * 1.6955)
    end

    if (loss% 6 == 0) then
        chance = chance2
    end

    if profit >= 0 then
        chance = chance1
    end

    --Switch OverUnder
    if (wins% 250 == 0) then
        bethigh = !bethigh
    end
    if currentstreak = 125 then
        bethigh = !bethigh
    end
    if currentstreak = -4 then
        bethigh = !bethigh
    end

    --Reset Seed
    if (bets% 250 == 0) then
        resetSeed()
    end

end